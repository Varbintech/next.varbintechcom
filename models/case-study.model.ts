interface ProjectTag {
  name: string;
  link: string;
}

interface ProjectImage {
  src: string;
  name: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
}

export interface ProjectFeedback {
  text: string;
  name: string;
  image: ProjectImage;
  company: string;
  companyName: string;
  companyLinkHref: string;
  linkedInLink: string;
}

export interface CaseStudy {
  id: number;
  projectImage: ProjectImage;
  projectImageAlt: string;
  projectTitle: string;
  projectDescription: Array<string>;
  projectTags: Array<ProjectTag>;
  results: Array<string>;
  feedback: ProjectFeedback;
}
