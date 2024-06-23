export interface SocialShareButton {
  id: number;
  socialTitle: string;
  socialLink: string;
  socialIcon: string;
  socialBorderRadius: string;
  socialAriaLabel: string;
}

export const socialShareButtons = (pageLink: string): Array<SocialShareButton> => {
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
      socialTitle: 'Twitter',
      socialLink: `https://twitter.com/intent/tweet?text=${pageLink}`,
      socialIcon: 'twitterIcon',
      socialBorderRadius: '',
      socialAriaLabel: 'Share on Twitter',
    },
  ];
};
