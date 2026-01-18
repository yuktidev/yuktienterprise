const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />

        {/* Text */}
        <p className="text-white text-sm tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default GlobalLoader;
