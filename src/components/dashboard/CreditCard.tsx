import React from "react";

export const CreditCard: React.FC = () => {
  return (
    <div className="relative w-80 h-48 bg-gradient-to-r from-[#5B5A6F] to-[#000] rounded-xl text-white p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <p className="text-sm">Balance</p>
        <h2 className="text-2xl font-semibold">$5,756</h2>
      </div>

      {/* Middle Section */}
      <div className="flex justify-between text-sm mt-4">
        <div>
          <p className="text-gray-400">CARD HOLDER</p>
          <p className="font-semibold">Eddy Cusuma</p>
        </div>
        <div>
          <p className="text-gray-400">VALID THRU</p>
          <p className="font-semibold">12/22</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold tracking-widest">
          3778 **** **** 1234
        </p>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
