"use server";

import { redirect } from "next/navigation";
import { LoginForm } from "~/components/login-form";
import { auth } from "~/server/auth";
import QuickClipsLogo from "~/components/logo";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="relative flex min-h-svh w-full overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-primary/5">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/[0.03] to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-bounce opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-primary/12 rounded-full blur-lg animate-float opacity-40"></div>
        <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-primary/6 rounded-full blur-2xl animate-pulse opacity-20"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,104,0,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          {/* Logo at the top */}
          <div className="mb-8 text-center">
            <div className="inline-block p-4 rounded-xl glass-card shadow-glow animate-float">
              <QuickClipsLogo />
            </div>
          </div>
          
          {/* Form Container with enhanced styling */}
          <div className="relative">
            {/* Glow effect behind the form */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl"></div>
            
            {/* Main form container */}
            <div className="relative glass-card shadow-glow border border-primary/20 rounded-xl overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02] rounded-xl"></div>
              
              {/* Form content */}
              <div className="relative z-10">
                <LoginForm />
              </div>
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground opacity-60">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
              <span>Secure Login</span>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}