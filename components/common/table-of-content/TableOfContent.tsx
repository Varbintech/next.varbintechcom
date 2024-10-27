import { useEffect, useState, useRef } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import type { ProjectImage, SocialIcon } from '../../../models';
import type { TocContent } from '../../../utils/api.blog';

import ImageWrapperComponent from '../image-wrapper/ImageWrapper';
import SocialIcons from '../social-icons/SocialIcons';
import Link from '../link/Link';

import { TableOfContentContainer } from './styled-components';

interface TableOfContentProps {
  image: ProjectImage;
  data: Array<TocContent>;
  socialIcons: Array<SocialIcon>;
  slug: string;
}

interface TocLinkProps {
  href: string;
  title: string;
  slug: string;
  activeId: string;
}

const options = {
  root: null,
  rootMargin: `-40% 0px`,
  threshold: [],
};

const TocLink = ({ href, title, activeId }: TocLinkProps) => {
  return (
    <Link href={`#${href}`} underline={activeId === href ? 'always' : 'none'} component="a">
      {title}
    </Link>
  );
};

const TableOfContent = (props: TableOfContentProps) => {
  const { image, socialIcons, data, slug } = props;

  const [activeId, setActiveId] = useState('');
  const sections = useRef<NodeListOf<Element> | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!activeId && data.length > 0) {
      setActiveId(data[0].href);
    }
  }, [activeId, data]);

  useEffect(() => {
    sections.current = document.querySelectorAll('.section');

    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    if (sections.current) {
      sections.current.forEach(section => {
        if (observer.current && section) {
          observer.current.observe(section);
        }
      });
    }

    return () => {
      if (sections.current) {
        sections.current.forEach(section => {
          if (observer.current && section) {
            observer.current.unobserve(section);
          }
        });
      }
    };
  }, [data, activeId]);

  return (
    <TableOfContentContainer>
      <Box marginBottom="35px">
        <ImageWrapperComponent data={image} smallSize />
      </Box>

      <Typography variant="h5" marginBottom={1.75}>
        Table of Contents
      </Typography>

      <Stack spacing={2} marginBottom="52px">
        {data.length > 0
          ? data.map((item, index) => (
              <TocLink
                key={index}
                href={item.href}
                title={`${item?.title}`}
                slug={slug}
                activeId={activeId}
              />
            ))
          : null}
      </Stack>

      <SocialIcons data={socialIcons} />
    </TableOfContentContainer>
  );
};

export default TableOfContent;
