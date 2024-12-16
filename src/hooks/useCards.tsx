import { useQuery } from "@tanstack/react-query";

const cards = [
  {
    balance: "$5,756",
    id: "card-1",
    customerName: "Eddy Cusuma",
    expiryDate: "12/22",
    cardNo: "3778 **** **** 1234",
    theme: "dark" as const,
  },
  {
    balance: "$2,190",
    id: "card-2",
    customerName: "Ava Moreno",
    expiryDate: "08/25",
    cardNo: "4532 **** **** 8765",
    theme: "light" as const,
  },
  {
    balance: "$8,421",
    id: "card-3",
    customerName: "Liam Chen",
    expiryDate: "04/28",
    cardNo: "6011 **** **** 2345",
    theme: "dark" as const,
  },
];

export const useCards = () => {
  return useQuery({
    queryKey: ["cards"],
    initialData: cards,
  });
};
