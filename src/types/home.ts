export type HeroSection = {
    title: string;
    description: string;
    dynamicTaglines: string[];
    testimonialButton: {
        text: string;
        link: string;
    };
    image: string;
    imageAlt: string;
};

export type WhatWeDo = {
    title: string;
    description: string;
    comprehensive: Comprehensive;
    image: string;
    imageAlt: string;
};

export interface HowWeDoIt {
    howWeDoIt: {
        _id: string;
        title: string;
        __v: number;
        content: {
            _id: string;
            title: string;
            description: string;
            image: string;
            imageAlt: string;
            steps: Step[];
            cards: Card[];
            __v: number;
        };
    };
}

export interface Step {
    _id: string;
    num: number;
    text: string;
    image: string;
    imageAlt: string;
}

export interface Card {
    _id: string;
    title: string;
    video: string;
    button: string;
}


export type Comprehensive = {
    title: string;
    content: {
        doNotAccept: {
            text: string;
            explanation: string;
        };
        _id: string;
        title: string;
        description: string;
        plan: Plan[];
        __v: number;
    };
};

export type Plan = {
    _id: string;
    services: Service[];
    buttons: Button[];
    amount: string;
    yearTag: string;
    includeText: string;
    title?: string;
};

export type Service = {
    _id: string;
    title: string;
    description: string;
};

export type Button = {
    _id: string;
    text: string;
};

export type InNewsItem = {
    _id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    date: string;
    source?: string;
    link?: string;
  };
  
  export type InNewsCompany = {
    _id: string;
    name: string;
    image: string;
    imageAlt: string;
    height: number;
    width: number;
  };
  
  export type InNews = {
    title: string;
    description: string;
    news: InNewsItem[];
    companies: InNewsCompany[];
  };

  export type WhyPlnrCard = {
    _id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  
  export type WhyPlnr = {
    _id: string;
    title: string;
    description: string;
    cards: WhyPlnrCard[];
    __v: number;
  };
  
  export type HowItWorksCard = {
    _id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  
  export type HowItWorks = {
    _id: string;
    title: string;
    description: string;
    cards: HowItWorksCard[];
    __v: number;
  };
  
  export type DownloadSection = {
    _id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    button: {
      text: string;
    };
    pdfFile: string;
    __v: number;
  };
  
  export type Testimonial = {
    _id: string;
    name: string;
    position: string;
    content: string;
    image: string;
    imageAlt: string;
    isFeatured: boolean;
    __v: number;
  };
  export type UnderstandSection = {
    _id: string;
    title: string;
    description: string;
    button: string;
    __v: number;
    image: string;
    imageAlt: string;
    insurer: string[];
    policy: string[];
    product: string[];
  };


  export type HomeFaqs = {
    _id: string;
    title: string;
    button: {
      text: string;
    };
    faqs: FaqTopic;
    __v: number;
  };
  
  export type FaqTopic = {
    _id: string;
    topic: string;
    faqs: FaqItem[];
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  export type FaqItem = {
    _id: string;
    question: string;
    answer: string;
  };
  

export type HomeData = {
    heroSection: HeroSection;
    whatWeDo: WhatWeDo;
    howWeDoIt: {
      _id: string;
      title: string;
      __v: number;
      content: {
        _id: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        steps: Step[];
        cards: Card[];
        __v: number;
      };
    };
    inNews: InNews;
    whyPLNR: WhyPlnr; 
    howItWorks: HowItWorks;
    download: DownloadSection;
    testimonials: Testimonial[];
    understand: UnderstandSection;
    homeFaqs: HomeFaqs;
  };
  
