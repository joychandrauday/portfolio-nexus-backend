export type ICredentials = {
    banner: IBanner;
    about: IAbout;
    social: ISocial;
    education: IEducation[];
    experience: IExperience[];
};



export type IBanner = {
    id: string;
    title: string;
    subtitle: string;
    bannerImage: string;
    designations: string[];
    designationPretext: string;
};

export type IAbout = {
    id: string;
    title: string;
    content: string;
};

export type ISocial = {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    github: string;
    medium: string;
    youtube: string;
    dribbble: string;
    behance: string;
    reddit: string;
    stackoverflow: string;
    resume: string;
};

export type IEducation = {
    id: string;
    degree: string;
    institution: string;
    specialization: string;
    startYear: Date;
    endYear: Date | "present";
};

export type IExperience = {
    id: string;
    company: string;
    position: string;
    duration: { from: string; to: string } | string;
    location: string;
    description: string;
    achievements: string[];
}