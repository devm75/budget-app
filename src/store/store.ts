import { create } from "zustand";
import { SidebarState } from "./store.types";

export const useSidebarStore = create<SidebarState>()((set) => ({
  open: true,
  toggle: () => set((state) => ({ open: !state.open })),
  openSidebar: () => set(() => ({ open: true })),
  closeSidebar: () => set(() => ({ open: false })),
}));
