export interface FooterData {
    logo: {
      imageAlt: string;
      image: string;
    };
    reservedText: {
      year: number;
      text: string;
    };
    getInTouch: {
      email: string;
      phone: string;
      address: string;
    };
    _id: string;
    getStarted: {
      title: string;
      description: string;
      tags: string[];
      _id: string;
    };
    sebi: {
      nameOfAdvisor: string;
      sebiRegNo: string;
      regType: string;
      description: string;
      _id: string;
    };
    socialMedia: {
      icon: string;
      iconAlt: string;
      _id: string;
      link: string;
    }[];
    __v: number;
  }
  