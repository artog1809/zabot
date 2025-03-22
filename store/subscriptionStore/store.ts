import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrgType = "ООО" | "ИП";

export type Requisite = {
  id: string;
  orgType: OrgType;
  organizationName: string;
  legalAddress: string;
  inn: string;
  kpp?: string;
  ogrn?: string;
  ogrnip?: string;
  settlementAccount: string;
  bankName: string;
  correspondentAccount: string;
  bik: string;
};

type SubscriptionState = {
  requisites: Requisite[];
  addRequisite: (req: Requisite) => void;
  removeRequisite: (id: string) => void;
  updateRequisite: (updatedRequisite: Requisite) => void;
};

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      requisites: [],
      addRequisite: (req) =>
        set((state) => ({
          requisites: [...state.requisites, req],
        })),
      removeRequisite: (id) =>
        set((state) => ({
          requisites: state.requisites.filter(
            (requisite) => requisite.id !== id
          ),
        })),
      updateRequisite: (updatedRequisite) =>
        set((state) => ({
          requisites: state.requisites.map((requisite) =>
            requisite.id === updatedRequisite.id ? updatedRequisite : requisite
          ),
        })),
    }),
    { name: "subscription-state" }
  )
);
