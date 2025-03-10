import Hero from "@/components/dashboard/getstarted/Hero";
import { VideoSections } from "@/components/dashboard/getstarted/video-sections";
import { constructMetadata } from "@/lib/utils";

import { createVideoSections } from "@/lib/youtube";
import { videoData } from "@/data/videos";
import React from "react";
export const metadata = constructMetadata();
function page() {
  const sections = createVideoSections(videoData.urls, videoData.titles);

  return (
    <div className="max-w-[1920px] flex flex-col items-center m-auto justify-between">
      <Hero />
      <VideoSections sections={sections} />
    </div>
  );
}

export default page;
