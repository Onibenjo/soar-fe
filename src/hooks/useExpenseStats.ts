import { useQuery } from "@tanstack/react-query";

const data = [
  { name: "Entertainment", value: 30, },
  { name: "Bill Expense", value: 15, },
  { name: "Others", value: 35, },
  { name: "Investment", value: 20, },
];

export const useExpenseStats = () => {
  return useQuery({
    queryKey: ["expense stats"],
    initialData: data,
  });
};
