import { useQuery } from "@tanstack/react-query";

const users = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 4,
    name: "Workman",
    role: "Designer",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 5,
    name: "Workman",
    role: "Designer",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
];

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    initialData: users,
  });
};
