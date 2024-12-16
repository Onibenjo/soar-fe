import { useQuery } from "@tanstack/react-query";

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
  {
    id: 4,
    icon: "💰",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountClass: "text-green-500", // Class for positive amounts
    bgColor: "bg-teal-100", // Background for icon
  },
  {
    id: 5,
    icon: "💰",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountClass: "text-green-500", // Class for positive amounts
    bgColor: "bg-teal-100", // Background for icon
  },
];

export const useRecentTransactions = () => {
  return useQuery({
    queryKey: ["recent transactions"],
    initialData: transactions,
  });
};
