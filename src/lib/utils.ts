import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { HOME_DOMAIN, SITE_NAME } from "@/constants";
import { Metadata } from "next";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function constructMetadata({
  title = SITE_NAME,
  description = "Where Digital Excellence Meets Opportunity",
  image = `${HOME_DOMAIN}/og-image.png`,
  video,
  icons = [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      url: `${HOME_DOMAIN}/favicon.ico`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: `${HOME_DOMAIN}/apple-touch-icon.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: `${HOME_DOMAIN}/favicon-32x32.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: `${HOME_DOMAIN}/favicon-16x16.png`,
    },
  ],
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  icons?: Metadata["icons"];
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
      ...(video && {
        videos: video,
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      ...(video && {
        player: video,
      }),
      creator: "@jbdzmn",
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}