import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { get, set, del } from 'idb-keyval' // can use anything: IndexedDB, Ionic Storage, etc.

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, 'has been retrieved')
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, 'with value', value, 'has been saved')
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, 'has been deleted')
    await del(name)
  },
}

export type User = {
  yourName: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  permanentAddress: string;
  presentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profileImage: string;
};

interface UserStore {
  user: Partial<User>;
  setUser: (val: Partial<User>) => void;
}

export const useUser = create(
  persist<UserStore>(
    (set) => ({
      user: {},
      setUser: (user) => {
        set({user});
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => storage),
    }
  )
);
