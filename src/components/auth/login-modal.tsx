"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import QuickClipsLogo from "~/components/logo";
import { useAuthModal } from "~/hooks/use-auth-modal";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginModal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { activeModal, isClosing, closeModal, switchToSignup } = useAuthModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      // TODO: Implement actual login logic
      console.log("Login data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      closeModal();
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (activeModal !== "login") return null;

  return (
    <>
      {/* Blurred backdrop */}
      <div 
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl"
        onClick={closeModal}
      />
      
      {/* Modal card - fixed and centered */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl w-[calc(100%-2rem)] max-w-[340px] sm:max-w-md transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <QuickClipsLogo />
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-1">
              Welcome back
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="h-9 sm:h-10 text-sm"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs sm:text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="h-9 sm:h-10 text-sm"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2.5 text-xs text-red-400">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full btn-primary text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </Button>
          </form>

          {/* Switch to signup */}
          <div className="mt-5 pt-5 text-center text-xs sm:text-sm border-t border-border">
            <span className="text-muted-foreground">Don&apos;t have an account? </span>
            <button
              type="button"
              onClick={switchToSignup}
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </button>
          </div>

          {/* Terms */}
          <div className="mt-3 text-center text-[10px] sm:text-xs text-muted-foreground">
            By continuing, you agree to{" "}
            <a href="/terms" className="text-primary hover:underline">Terms</a>
            {" "}and{" "}
            <a href="/privacy" className="text-primary hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </>
  );
}