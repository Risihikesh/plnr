
export interface VisionMission {
    _id: string;
    title: string;
    description: string;
  }
  
  export interface MeetTheTeam {
    imageAlt: string;
    description: string[];
    title: string;
    name: string;
    position: string;
    education: string;
    image: string;
  }
  
  export interface AboutData {
    meetTheTeam: MeetTheTeam;
    _id: string;
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    visionMission: VisionMission[];
    __v: number;
  }
  