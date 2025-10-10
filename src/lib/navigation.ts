import { useRouter } from "next/navigation";
import { useTransition } from "react";

/**
 * Enhanced navigation hook with loading states
 * Use this for programmatic navigation with better UX
 */
export function useOptimizedRouter() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigateTo = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  return {
    navigateTo,
    prefetchRoute,
    isPending,
    router,
  };
}