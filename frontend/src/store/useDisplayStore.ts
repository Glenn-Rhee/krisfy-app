import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type DisplayState } from '@/types/internal';

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
