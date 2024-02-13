const Shimmer = () => {
  return (
    <>
      <div className="bg-[#f0f0f0] h-16 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5"></div>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-4 md:p-4">
        <div className="bg-[#f0f0f0] h-12 w-56 rounded-lg text-4xl mb-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
          <div className="w-64 h-96 bg-[#f0f0f0] rounded-lg overflow-hidden shadow-lg mb-4"></div>
          <div className="w-64 h-96 bg-[#f0f0f0] rounded-lg overflow-hidden shadow-lg mb-4"></div>
          <div className="w-64 h-96 bg-[#f0f0f0] rounded-lg overflow-hidden shadow-lg mb-4"></div>
          <div className="w-64 h-96 bg-[#f0f0f0] rounded-lg overflow-hidden shadow-lg mb-4"></div>
          <div className="w-64 h-96 bg-[#f0f0f0] rounded-lg overflow-hidden shadow-lg mb-4"></div>
          <div className="w-64 h-96 bg-[#f0f0f0] rounded-lg overflow-hidden shadow-lg mb-4"></div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
