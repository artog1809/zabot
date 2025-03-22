import { create } from "zustand";

type Requisite = {
  id: string;
  name: string;
};

type SubscriptionState = {
  requisites: Requisite[];
  addRequisite: (sub: Requisite) => void;
};

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  requisites: [],
  addRequisite: (sub) =>
    set((state) => ({
      requisites: [...state.requisites, sub],
    })),
}));
