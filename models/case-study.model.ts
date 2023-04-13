export interface ProjectTag {
  name: string;
  link: string;
}

export interface ProjectImage {
  src: string;
  name: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
}

interface ProjectTextSection {
  title?: string;
  text?: string;
  textList?: Array<string>;
}

export interface ProjectFeedback {
  text: string;
  name: string;
  company: string;
  companyName: string;
  companyLinkHref: string;
  linkedInLink: string;
  image?: ProjectImage;
}

export interface ProjectResultInfo {
  name: string;
  text: string;
}

export interface ProjectTextDetails {
  label: 'TEXT',
  name: string;
  textSection: Array<ProjectTextSection>;
}

export interface ProjectImageDetails {
  label: 'IMAGE',
  imageSection: Array<ProjectImage>;
}

export interface ProjectFullInfo {
  name: string;
  description: Array<string>;
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
  resultInfo: Array<ProjectResultInfo>;
  projectDetails: Array<ProjectTextDetails | ProjectImageDetails>;
  projectFullInfo: Array<ProjectFullInfo>;
}
