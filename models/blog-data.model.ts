import type {
  ProjectImage,
  ProjectImageDetails,
  ProjectTag,
  ProjectTextDetails,
} from './case-study.model';

export interface BlogItem {
  id: number;
  blogImage: ProjectImage;
  blogCategoty: string;
  blogDate: string;
  blogAuthor: string;
  blogAuthorPhoto: ProjectImage;
  blogTitle: string;
  blogTags: Array<ProjectTag>;
  blogDetails: Array<ProjectTextDetails | ProjectImageDetails>;
}
