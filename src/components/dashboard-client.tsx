"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Upload, Loader2 } from "lucide-react";
import Link from "next/link";
import { ClipDisplay } from "./clip-display";

interface Clip {
  id: string;
  url: string;
  title: string;
  duration: number;
  thumbnail?: string;
}

interface DashboardClientProps {
  clips: Clip[];
  credits: number;
}

export function DashboardClient({ clips, credits }: DashboardClientProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    try {
      // Upload logic would go here
      toast.success("Files uploaded successfully!");
      setFiles([]);
      // Reset file input
      const fileInput = document.querySelector(
        'input[type="file"]',
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      toast.error("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Refresh logic would go here
      toast.success("Clips refreshed!");
    } catch (error) {
      toast.error("Failed to refresh clips");
    } finally {
      setRefreshing(false);
    }
  };

  if (credits <= 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <div className="text-6xl">💳</div>
        <h2 className="text-2xl font-bold">No credits remaining</h2>
        <p className="text-muted-foreground max-w-md">
          You've used all your credits for this billing period. Purchase more
          credits to continue generating clips.
        </p>
        <Link href="/dashboard/billing">
          <Button className="btn-primary">Buy Credits</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload Videos</CardTitle>
          <CardDescription>
            Upload your video files to generate clips. Each video costs 1 credit.
            You have {credits} credits remaining.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="video-upload">Video files</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="video-upload"
                type="file"
                accept="video/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <Label htmlFor="video-upload">
                <Button
                  className="btn-secondary"
                  type="button"
                  disabled={uploading}
                >
                  Select File
                </Button>
              </Label>
            </div>
            {files.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">
                  {files.length} file(s) selected:
                </p>
                <ul className="text-sm">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex space-x-2">
            <Button
              disabled={files.length === 0 || uploading}
              onClick={handleUpload}
              className="btn-primary"
            >
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload and Generate Clips"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Clips</h2>
        <Button
          onClick={handleRefresh}
          disabled={refreshing}
          className="btn-secondary btn-sm"
        >
          {refreshing && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Refresh
        </Button>
      </div>

      <ClipDisplay clips={clips} />
    </div>
  );
}