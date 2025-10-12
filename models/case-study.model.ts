export interface ProjectTag {
  name: string;
  link: string;
}

export interface ProjectImage {
  src: string;
  name: string;
  width: number;
  height: number;
  alt?: string;
  srcSet?: string;
  sizes?: string;
}

interface ProjectTextSection {
  subTitle?: string;
  text?: string;
  textList?: Array<string>;
}

export interface ProjectFeedback {
  text: string;
  name: string;
  company: string;
  companyName: string;
  companyLinkHref: string;
  linkedInLink?: string;
  websiteLink?: string;
  image?: ProjectImage;
}

export interface ProjectResultInfo {
  name: string;
  text: string;
}

export interface ProjectTextDetails {
  label: 'TEXT';
  name: string;
  textSection: Array<ProjectTextSection>;
  href?: string;
  title?: string;
}

export interface ProjectImageDetails {
  label: 'IMAGE';
  imageSection: Array<ProjectImage>;
}

export interface ProjectFullInfo {
  name: string;
  description: Array<string>;
}

// @TODO to remove CaseStudyStrapi and use CaseStudy instead
// @deprecated
export interface CaseStudy {
  id: string;
  projectImage: ProjectImage;
  projectImageAlt: string;
  projectTitle: string;
  projectDescription: Array<string>;
  projectTags: Array<ProjectTag>;
  results: Array<string>;
  resultInfo: Array<ProjectResultInfo>;
  projectDetails: Array<ProjectTextDetails | ProjectImageDetails>;
  projectFullInfo: Array<ProjectFullInfo>;
  feedback: ProjectFeedback;
}
