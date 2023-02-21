import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-7xl">Kseniia's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-yellow-400">
            Every Developers
          </span>{" "}
          favorite blog in the Devosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New features | The latest in technology | The weekly debugging
        nightmares & More!
      </p>
    </div>
  );
};

export default Banner;
