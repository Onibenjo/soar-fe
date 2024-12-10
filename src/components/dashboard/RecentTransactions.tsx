import React from "react";

const transactions = [
  {
    id: 1,
    icon: "💳", // Emoji or use an icon library
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountClass: "text-red-500", // Class for negative amounts
    bgColor: "bg-yellow-100", // Background for icon
  },
  {
    id: 2,
    icon: "🅿️",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountClass: "text-green-500", // Class for positive amounts
    bgColor: "bg-blue-100", // Background for icon
  },
  {
    id: 3,
    icon: "💰",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountClass: "text-green-500", // Class for positive amounts
    bgColor: "bg-teal-100", // Background for icon
  },
];

export const RecentTransactions: React.FC = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold">Recent Transactions</h2>
      <div className="bg-white rounded-3xl p-4">
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between space-x-4">
              {/* Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${transaction.bgColor}`}>
                <span className="text-xl">{transaction.icon}</span>
              </div>

              {/* Transaction Details */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {transaction.title}
                </p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>

              {/* Amount */}
              <div
                className={`text-lg font-semibold ${transaction.amountClass}`}>
                {transaction.amount}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
