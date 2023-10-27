import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://universities.hipolabs.com/search?country=Indonesia"
        );
        setUniversities(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const openDetailModal = (university) => {
    setSelectedUniversity(university);
  };

  const closeDetailModal = () => {
    setSelectedUniversity(null);
  };

  const username = localStorage.getItem("user");
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center">
          <h1 className="sm:text-3xl text-2xl inline-flex font-medium text-center title-font text-gray-900 mb-4">
            Welcome : {username}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 ml-4 inline-flex  hover:bg-blue-700 text-white font-bold py-2 px-2 mb-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama Universitas
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Website
                    </th>
                  </tr>
                </thead>

                {universities.map((university, index) => (
                  <tbody
                    key={university.name}
                    onClick={() => openDetailModal(university, index + 1)}
                  >
                    <tr className="px-6 cursor-pointer py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{university.name}</td>

                      <td className="px-6 py-4">
                        <a
                          href={university.web_pages[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {university.web_pages[0]}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </>
          )}
        </div>
      </div>

      <Modal
        isOpen={selectedUniversity !== null}
        onClose={closeDetailModal}
        university={selectedUniversity}
      />
    </>
  );
};

export default Dashboard;
