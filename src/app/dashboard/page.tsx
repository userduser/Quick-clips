"use server";

import { redirect } from "next/navigation";
import { DashboardClient } from "~/components/dashboard-client";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const userData = await db.user.findUniqueOrThrow({
    where: { id: session.user.id },
    select: {
      credits: true,
      uploadedFiles: {
        where: {
          uploaded: true,
        },
        select: {
          id: true,
          s3Key: true,
          displayName: true,
          status: true,
          createdAt: true,
          _count: {
            select: {
              clips: true,
            },
          },
        },
      },
      clips: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const formattedFiles = userData.uploadedFiles.map((file) => ({
    id: file.id,
    s3Key: file.s3Key,
    filename: file.displayName ?? "Unkown filename",
    status: file.status,
    clipsCount: file._count.clips,
    createdAt: file.createdAt,
  }));

  // Format clips to match expected interface
  const formattedClips = userData.clips.map((clip) => ({
    id: clip.id,
    url: clip.s3Key, // Using s3Key as URL for now
    title: `Clip ${clip.id.slice(-6)}`, // Generate a title from ID
    duration: 30, // Default duration - would come from video metadata
    thumbnail: undefined, // No thumbnail for now
  }));

  return (
    <DashboardClient clips={formattedClips} credits={userData.credits} />
  );
}
