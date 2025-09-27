const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-gray-100">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid mb-4"></div>
      <h2 className="text-xl font-semibold text-gray-700">
        Loading, please wait...
      </h2>
    </div>
  );
};

export default Loading;
