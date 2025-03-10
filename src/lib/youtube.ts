export type VideoSection = {
  id: number;
  title: string;
  videoId: string;
  thumbnailUrl: string;
  align: "left" | "right";
};

export function getYouTubeVideoId(url: string): string {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    if (!hostname.includes("youtube.com") && !hostname.includes("youtu.be")) {
      throw new Error("Not a YouTube URL");
    }

    if (hostname.includes("youtu.be")) {
      return urlObj.pathname.slice(1);
    }

    const searchParams = new URLSearchParams(urlObj.search);
    const videoId = searchParams.get("v");

    if (!videoId) {
      throw new Error("No video ID found");
    }

    return videoId;
  } catch (error) {
    console.error("Error parsing YouTube URL:", error);
    return "";
  }
}

export function createVideoSections(
  videoUrls: string[],
  titles: string[]
): VideoSection[] {
  return videoUrls.map((url, index) => {
    const videoId = getYouTubeVideoId(url);
    return {
      id: index + 1,
      title: titles[index] || `Section ${index + 1}`,
      videoId,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      align: index % 2 === 0 ? "left" : "right",
    };
  });
}
