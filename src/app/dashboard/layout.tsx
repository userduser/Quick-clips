import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import NavHeader from "~/components/nav-header";
import { Toaster } from "~/components/ui/sonner";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { cache } from "react";

// Cache the user data to prevent repeated database queries
const getCachedUser = cache(async (userId: string) => {
  return await db.user.findUniqueOrThrow({
    where: { id: userId },
    select: { credits: true, email: true },
  });
});

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await getCachedUser(session.user.id);

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader credits={user.credits} email={user.email} />
      <main className="container mx-auto flex-1 py-6">{children}</main>
      <Toaster />
    </div>
  );
}
