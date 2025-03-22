import { create } from "zustand";

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
};

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  requisites: [],
  addRequisite: (req) =>
    set((state) => ({
      requisites: [...state.requisites, req],
    })),
}));
