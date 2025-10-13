"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { loginSchema, type LoginFormValues } from "~/schemas/auth";
import { useAuthModal } from "~/hooks/use-auth-modal";
import QuickClipsLogo from "~/components/logo";

export function LoginModal() {
  const { closeModal, switchToSignup, isClosing } = useAuthModal();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const signInResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResult?.error) {
        setError("Invalid email or password.");
      } else {
        closeModal();
        router.push("/dashboard");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md modal-content">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-xl" />
        
        {/* Main modal content */}
        <div className="relative glass-card shadow-glow border border-primary/30 rounded-2xl overflow-hidden animate-float">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="px-8 pt-8 pb-2 text-center">
            <div className="inline-block mb-6">
              <QuickClipsLogo />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Welcome back
            </h2>
            <p className="text-muted-foreground/80 mt-2">
              Sign in to your Quick Clips account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 pb-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email")}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
                {errors.email && (
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-400 rounded-full" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
                {errors.password && (
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-400 rounded-full" />
                    {errors.password.message}
                  </p>
                )}
              </div>

              {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                className="btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Logging in...
                  </>
                ) : (
                  "Log in"
                )}
              </Button>
            </div>

            {/* Switch to signup */}
            <div className="mt-6 text-center text-sm border-t border-border/30 pt-6">
              <span className="text-muted-foreground">Don&apos;t have an account? </span>
              <button
                type="button"
                onClick={switchToSignup}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Sign up
              </button>
            </div>

            {/* Terms and Privacy */}
            <div className="mt-4 text-center text-xs text-muted-foreground/70">
              By continuing, you agree to Quick Clips's{" "}
              <a href="/terms" target="_blank" className="text-primary hover:text-primary/80 underline">
                Terms of Service
              </a>
              .{" "}
              Read our{" "}
              <a href="/privacy" target="_blank" className="text-primary hover:text-primary/80 underline">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}