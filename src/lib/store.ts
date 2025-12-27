import { create } from 'zustand';

interface AuthStore {
  isLoggedIn: boolean;
  user: any;
  setLoggedIn: (state: boolean, user?: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  user: null,
  setLoggedIn: (state, user) => set({ isLoggedIn: state, user }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));

interface ContentStore {
  content: any;
  setContent: (content: any) => void;
}

export const useContentStore = create<ContentStore>((set) => ({
  content: null,
  setContent: (content) => set({ content }),
}));
