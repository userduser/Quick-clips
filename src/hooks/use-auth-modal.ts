"use client";

import { create } from 'zustand';

type AuthModal = 'login' | 'signup' | 'logout' | null;

interface AuthModalStore {
  activeModal: AuthModal;
  isClosing: boolean;
  openLogin: () => void;
  openSignup: () => void;
  openLogout: () => void;
  closeModal: () => void;
  switchToLogin: () => void;
  switchToSignup: () => void;
}

export const useAuthModal = create<AuthModalStore>((set, get) => ({
  activeModal: null,
  isClosing: false,
  openLogin: () => set({ activeModal: 'login', isClosing: false }),
  openSignup: () => set({ activeModal: 'signup', isClosing: false }),
  openLogout: () => set({ activeModal: 'logout', isClosing: false }),
  closeModal: () => {
    set({ isClosing: true });
    // Delay the actual close to allow animation to complete
    setTimeout(() => {
      set({ activeModal: null, isClosing: false });
    }, 200);
  },
  switchToLogin: () => set({ activeModal: 'login', isClosing: false }),
  switchToSignup: () => set({ activeModal: 'signup', isClosing: false }),
}));