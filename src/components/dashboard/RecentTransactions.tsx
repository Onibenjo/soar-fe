import { useRecentTransactions } from "../../hooks/useRecentTransactions";

export const RecentTransactions = () => {
  const { data: transactions } = useRecentTransactions();

  return (
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
            <p className="font-semibold text-gray-800">{transaction.title}</p>
            <p className="text-sm text-gray-400">{transaction.date}</p>
          </div>

          {/* Amount */}
          <div className={`text-lg font-semibold ${transaction.amountClass}`}>
            {transaction.amount}
          </div>
        </li>
      ))}
    </ul>
  );
};
