import type { SocialIcon } from '../models/social-icons.model';

export const socialShareButtons = (pageLink: string): Array<SocialIcon> => {
  return [
    {
      id: 0,
      socialTitle: 'Facebook',
      socialLink: `https://www.facebook.com/sharer/sharer.php?u=${pageLink}%2F&amp;src=sdkpreparse`,
      socialIcon: 'facebookIcon',
      socialBorderRadius: '',
      socialAriaLabel: 'Share on Facebook',
    },
    {
      id: 1,
      socialTitle: 'LinkedIn',
      socialLink: `https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,
      socialIcon: 'linkedInIcon',
      socialBorderRadius: '2px',
      socialAriaLabel: 'Share on LinkedIn',
    },
    {
      id: 2,
      socialTitle: 'X',
      socialLink: `https://x.com/intent/tweet?text=${pageLink}`,
      socialIcon: 'twitterIcon',
      socialBorderRadius: '',
      socialAriaLabel: 'Share on X',
    },
  ];
};
