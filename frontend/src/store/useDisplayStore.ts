import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type DisplayState = {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const useDisplayStore = create<DisplayState>()(
  persist(
    (set) => ({
      isVisible: false,
      toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
    }),
    {
      name: 'DISPLAY-APP',
    }
  )
);
