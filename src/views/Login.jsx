import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Inc
        </div>
        <div className="relative z-20 mt-52">
          <blockquote className="space-y-2">
            <p className="text-lg">Dummy Login</p>
            <p className="text-lg">Username &#58; &#34;kminchelle&#34;</p>
            <p className="text-lg">Password &#58; &#34;0lelplR&#34;</p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your username and email below to login
            </p>
          </div>
          <AuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              to="/dashboard"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/dashboard"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
