"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Download } from "lucide-react";
import { toast } from "sonner";

interface Clip {
  id: string;
  url: string;
  title: string;
  duration: number;
  thumbnail?: string;
}

interface ClipDisplayProps {
  clips: Clip[];
}

export function ClipDisplay({ clips }: ClipDisplayProps) {
  const handleDownload = async (clip: Clip) => {
    try {
      // Download logic would go here
      toast.success(`Downloading ${clip.title}...`);
    } catch (error) {
      toast.error("Download failed. Please try again.");
    }
  };

  if (clips.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center space-y-4 text-center">
        <div className="text-6xl">🎬</div>
        <h3 className="text-xl font-semibold">No clips yet</h3>
        <p className="text-muted-foreground max-w-md">
          Upload your first video to start generating viral clips automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {clips.map((clip) => (
        <Card key={clip.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-base">{clip.title}</CardTitle>
                <CardDescription>
                  Duration: {Math.round(clip.duration)}s
                </CardDescription>
              </div>
              <Badge variant="secondary">Ready</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              {clip.thumbnail ? (
                <img
                  src={clip.thumbnail}
                  alt={clip.title}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="text-muted-foreground text-sm">No preview</div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => handleDownload(clip)} className="btn-secondary btn-sm">
              <Download className="mr-1.5 h-4 w-4" />
              Download
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}