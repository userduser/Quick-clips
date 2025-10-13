"use server";

import { redirect } from "next/navigation";
import { SignupForm } from "~/components/signup-form";
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
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary/[0.04] to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-16 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-bounce opacity-25"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-primary/15 rounded-full blur-lg animate-float opacity-35"></div>
        <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-primary/7 rounded-full blur-2xl animate-pulse opacity-25"></div>
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
            <div className="inline-block p-4 rounded-xl glass-card shadow-glow animate-float" style={{animationDelay: '1s'}}>
              <QuickClipsLogo />
            </div>
          </div>
          
          {/* Form Container with enhanced styling */}
          <div className="relative">
            {/* Glow effect behind the form */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/15 to-primary/25 rounded-xl blur-xl"></div>
            
            {/* Main form container */}
            <div className="relative glass-card shadow-glow border border-primary/25 rounded-xl overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-primary/[0.03] rounded-xl"></div>
              
              {/* Corner highlights */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-primary/30 to-transparent rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/30 to-transparent rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-primary/30 to-transparent rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-primary/30 to-transparent rounded-br-xl"></div>
              
              {/* Form content */}
              <div className="relative z-10">
                <SignupForm />
              </div>
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground opacity-60">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
              <span>Join Quick Clips</span>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}