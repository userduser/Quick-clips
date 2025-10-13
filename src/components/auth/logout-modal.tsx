"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { X, LogOut } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function LogoutModal() {
  const { closeModal, isClosing } = useAuthModal();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut({ redirectTo: "/" });
      closeModal();
    } catch (error) {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay ${isClosing ? 'closing' : ''}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-sm modal-content ${isClosing ? 'closing' : ''}`}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 rounded-2xl blur-xl" />
        
        {/* Main modal content */}
        <div className="relative glass-card shadow-glow border border-red-500/30 rounded-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
              <LogOut className="w-8 h-8 text-red-500" />
            </div>
            
            {/* Title */}
            <h2 className="text-xl font-bold mb-3">
              Sign out of Quick Clips?
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground mb-8">
              You'll need to sign back in to access your dashboard and create clips.
            </p>
            
            {/* Actions */}
            <div className="flex gap-3">
              <Button
                onClick={closeModal}
                className="btn-secondary flex-1"
                disabled={isLoggingOut}
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogout}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                disabled={isLoggingOut}
              >
                {isLoggingOut ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Signing out...
                  </>
                ) : (
                  "Sign out"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}