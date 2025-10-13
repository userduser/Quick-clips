"use client";

import { create } from 'zustand';

type AuthModal = 'login' | 'signup' | 'logout' | null;

interface AuthModalStore {
  activeModal: AuthModal;
  openLogin: () => void;
  openSignup: () => void;
  openLogout: () => void;
  closeModal: () => void;
  switchToLogin: () => void;
  switchToSignup: () => void;
}

export const useAuthModal = create<AuthModalStore>((set) => ({
  activeModal: null,
  openLogin: () => set({ activeModal: 'login' }),
  openSignup: () => set({ activeModal: 'signup' }),
  openLogout: () => set({ activeModal: 'logout' }),
  closeModal: () => set({ activeModal: null }),
  switchToLogin: () => set({ activeModal: 'login' }),
  switchToSignup: () => set({ activeModal: 'signup' }),
}));