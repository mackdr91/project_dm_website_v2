
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container m-auto max-w-2xl py-24">
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-5xl text-red-500" />
        </div>
        <div className="text-center flex flex-col">
          <h4 className="text-2xl font-bold mt-2 mb-2">
            Sorry, there is nothing here
          </h4>
          <Link href="/projects">Go Back to Projects</Link>
          <Link href="/">Go Back Home</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
