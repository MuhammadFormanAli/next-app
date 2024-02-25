const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 relative">
        <div className="w-8 h-8 bg-black rounded-full opacity-75 absolute top-0 left-0 animate-bounce"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full opacity-75 absolute top-0 right-0 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
