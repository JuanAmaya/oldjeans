export default function BootUp() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pt-0 z-4">
      <div className="bg-white max-w-lg p-1 border-1 w-2xs md:w-xl">
        <div className="border-2 px-12 h-40 relative">
          <div className="absolute top-4 left-4">
            <img
              src="./icons/tokkitosh.png"
              alt="Tokkitosh Icon"
              className="w-10"
            />
          </div>
          <p className="text-center text-lg pt-8">Welcome to Tokkitosh.</p>
        </div>
      </div>
    </div>
  );
}
