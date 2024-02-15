import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="flex items-center h-screen p-16 bg-[#8EBE43] dark:[#8EBE43]">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            {error?.data}
          </p>
          <pre className="mt-4 rounded-lg"><code>{error?.error?.stack}</code></pre>
          <Link
            to={"/"}
            className="px-8 py-4 text-xl font-semibold rounded bg-[#5E1914] text-gray-50 hover:text-gray-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
