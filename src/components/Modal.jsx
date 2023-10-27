import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, university }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white w-96 p-4 rounded-lg shadow-lg">
        <div className="flex items-start justify-between p-1  rounded-t dark:border-gray-600">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <p>Nama Universitas: {university.name}</p>

        <p>
          Website:
          <a
            href={university.web_pages[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {university.web_pages[0]}
          </a>
        </p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  university: PropTypes.object,
};

export default Modal;
