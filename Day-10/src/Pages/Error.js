import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    // <div style={{ color: "red" }}>
    //   <h1>Oops! something went wrong!</h1>
    //   <h2>{error?.data}</h2>
    // </div>
    <section class="flex items-center h-screen p-16 bg-[#8EBE43] dark:[#8EBE43]">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-300">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to={"/"}
            class="px-8 py-4 text-xl font-semibold rounded bg-[#5E1914] text-gray-50 hover:text-gray-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
