import React from "react";

import Rotate from "../components/motionExample";

export default function Demo() {
  return (
    <div className="w-full max-w-lg bg-chatgptDark text-gray-100 p-6 rounded-2xl">
      <div className="aspect-video bg-cardDark rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
        <div className="text-center text-gray-400">
          <div className="mb-3 font-semibold">Video demo placeholder</div>
          <div>
            <Rotate />
          </div>
          <div className="text-xs"></div>
        </div>
      </div>

      <div className="mt-5 text-gray-300">
        <h4 className="font-semibold text-gray-100"></h4>
        <p className="text-sm text-gray-400 mt-2 leading-relaxed"></p>
      </div>
    </div>
  );
}
