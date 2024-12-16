import { useQuery } from "@tanstack/react-query";

const data = [
  { month: "Aug", balance: 400 },
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 350 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 600 },
  { month: "Dec", balance: 350 },
  { month: "Jan", balance: 700 },
];

export const useBalanceHistory = () => {
  return useQuery({
    queryKey: ["balance history"],
    initialData: data,
  });
};
