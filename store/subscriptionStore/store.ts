import { create } from "zustand";

type Subscription = {
  id: string;
  name: string;
};

type SubscriptionState = {
  subscriptions: Subscription[];
  addSubscription: (sub: Subscription) => void;
};

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscriptions: [],
  addSubscription: (sub) =>
    set((state) => ({
      subscriptions: [...state.subscriptions, sub],
    })),
}));
