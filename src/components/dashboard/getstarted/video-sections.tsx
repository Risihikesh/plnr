"use client";

import playbtn from "@/Assets/Dashboard/video-sections/yt-play.svg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { VideoSection } from "@/lib/youtube";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

interface VideoSectionsProps {
  sections: VideoSection[];
}

export function VideoSections({ sections }: VideoSectionsProps) {
  return (
      <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-24">
              {sections.map((section) => (
                  <div key={section.id} className="relative">
                      <div
                          className={`flex flex-col-reverse ${
                              section.align === "right"
                                  ? "md:flex-row-reverse"
                                  : "md:flex-row"
                          } items-start gap-4 md:gap-[50px] lg:gap-[100px]`}
                      >
                          <div className="w-full md:w-1/2">
                              <Dialog>
                                  <DialogTrigger asChild>
                                      <div className="relative w-full cursor-pointer group max-w-[400px]">
                                          <img
                                              src={section.thumbnailUrl}
                                              alt={section.title}
                                              className="rounded-lg object-cover aspect-[404/235]"
                                          />
                                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg">
                                              <div className="w-16 h-16 flex items-center justify-center ">
                                                  <Image
                                                      src={playbtn}
                                                      alt="play"
                                                      className="w-8 h-8 "
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  </DialogTrigger>
                                  <div className="hidden">
                                      <DialogTitle>{section.title}</DialogTitle>
                                  </div>
                                  <DialogContent className="sm:max-w-[800px]">
                                      <iframe
                                          width="100%"
                                          height="450"
                                          src={`https://www.youtube.com/embed/${section.videoId}`}
                                          title={section.title}
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                          className="rounded-lg"
                                      />
                                  </DialogContent>
                              </Dialog>
                              <Button
                                  variant="outline"
                                  className="mt-4 mx-auto text-[#0898E1] hover:text-[#0898E1] border-[#0898E1] hover:border-[#0898E1] rounded px-14 py-3 w-52 h-12 flex justify-center"
                              >
                                  WATCH IN HINDI
                              </Button>
                          </div>
                          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center mb-4 md:mb-0">
                              <div className="h-0.5 w-8 bg-[#00587A] md:w-[40px] md:h-[2px] mb-4" />
                              <h2 className="text-[28px] leading-[38px] font-bold">
                                  {section.title}
                              </h2>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}
