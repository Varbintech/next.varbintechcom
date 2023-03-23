interface ProjectTag {
  name: string;
  link: string;
}

interface Feedback {
  text: string;
  name: string;
  src: string;
  company: string;
  companyName: string;
  companyLinkHref: string;
  linkedInLink: string;
}

export interface CaseStudy {
  id: number;
  projectImage: string;
  projectImageAlt: string;
  projectTitle: string;
  projectDescription: Array<string>;
  projectTags: Array<ProjectTag>;
  results: Array<string>;
  feedback: Feedback;
}
