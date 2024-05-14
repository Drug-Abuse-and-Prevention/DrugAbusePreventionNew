import React from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg py-12 md:py-24 lg:py-32 bg-white text-gray-800">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
          <div className="bg-white/50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-center">
                Drug Abuse Prevention and Reporting 
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-center">
                at NIT Hamirpur
              </h1>
              <p className="max-w-[700px] text-lg text-center">
                Empowering our community to overcome substance abuse through
                education, support, and advocacy.
              </p>
            </div>
          </div>
          <Link
            to="/userSignup"
            className="inline-flex items-center justify-center btn btn-primary btn-lg btn-block mt-8 text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-4 py-2 text-xl"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-2 ">Signup</span>
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <UserIcon className="h-12 w-12 text-blue-500" />
            <h3 className="text-xl font-bold">Anonymous Reporting</h3>
            <p className="text-gray-500">
              Safely report drug-related concerns without fear of retaliation.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <PillIcon className="h-12 w-12 text-blue-500" />
            <h3 className="text-xl font-bold">Prevention Strategies</h3>
            <p className="text-gray-500">
              Learn effective ways to identify and address substance abuse.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <ShareIcon className="h-12 w-12 text-blue-500" />
            <h3 className="text-xl font-bold">
              Share Your Stories/Ask for Help
            </h3>
            <p className="text-gray-500">
              Connect with our community and access the support you need.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <GoalIcon className="h-12 w-12 text-blue-500" />
            <h3 className="text-xl font-bold">Recognizing Drug Abuse</h3>
            <p className="text-gray-500">
              Understand the signs and symptoms of substance abuse.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-blue-500 rounded-lg overflow-hidden shadow-md">
            <Link
              to="/reportform"
              className="inline-flex items-center justify-center h-16 w-full px-8 bg-blue-500 hover:bg-blue-600 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
            >
              Reporting
            </Link>
          </div>
          <div className="bg-blue-500 rounded-lg overflow-hidden shadow-md">
            <Link
              to="/helpdesk"
              className="inline-flex items-center justify-center h-16 w-full px-8 bg-blue-500 hover:bg-blue-600 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
            >
              Share Your Story
            </Link>
          </div>
          <div className="bg-blue-500 rounded-lg overflow-hidden shadow-md">
            <Link
              to="/help"
              className="inline-flex items-center justify-center h-16 w-full px-8 bg-blue-500 hover:bg-blue-600 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
            >
              Need Counselling?
            </Link>
          </div>
          <div className="bg-blue-500 rounded-lg overflow-hidden shadow-md">
            <Link
              to={"/tweetClassification"}
             
              className="inline-flex items-center justify-center h-16 w-full px-8 bg-blue-500 hover:bg-blue-600 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
            >
              Tweet Classification
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;

function GoalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </svg>
  );
}

function PillIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}