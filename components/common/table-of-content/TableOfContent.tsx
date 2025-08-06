import { useEffect, useState, useRef } from 'react';

import { useRouter } from 'next/router';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import type { ProjectImage, SocialIcon } from '../../../models';
import type { TocContent } from '../../../utils/api.blog';

import ImageWrapperComponent from '../image-wrapper/ImageWrapper';

import SocialIcons from '../social-icons/SocialIcons';

import { TableOfContentContainer, TableOfContentFixedHeight } from './styled-components';
import TocLink from './TocLink';

interface TableOfContentProps {
  image: ProjectImage;
  data: Array<TocContent>;
  socialIcons: Array<SocialIcon>;
}

const options = {
  root: null,
  rootMargin: `-40% 0px`,
  threshold: [],
};

const TableOfContent = (props: TableOfContentProps) => {
  const { image, socialIcons, data } = props;

  const router = useRouter();
  const [activeId, setActiveId] = useState('');
  const sections = useRef<NodeListOf<Element> | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const tocContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (activeId && tocContainerRef.current && router.isReady) {
      const activeLink = tocContainerRef.current.querySelector(`a[href="#${activeId}"]`);

      if (activeLink) {
        const container = tocContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        // @TODO: Issue with too many links in the table of contents
        // WHen a user clicks on a link, the page scrolls to the wrong section,
        // the wrong link is highlighted as active,
        // `setTimeout` as a quick dirty fix

        const isAboveViewport = linkRect.top < containerRect.top;
        const isBelowViewport = linkRect.bottom > containerRect.bottom;

        timeoutId = setTimeout(() => {
          if (isAboveViewport || isBelowViewport) {
            activeLink.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }, 200);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeId, router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const hash = router.asPath.split('#')[1];

      if (hash) {
        setActiveId(hash);
      } else {
        setActiveId('');
      }
    }
  }, [router.isReady, router.asPath]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sections.current = document.querySelectorAll('.section');

      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      }, options);

      sections.current.forEach(section => {
        observer.current?.observe(section);
      });
    }, 100);

    if (activeId === '') {
      setActiveId(data[0].id);
    }

    return () => {
      if (observer.current) {
        sections.current?.forEach(section => {
          observer.current?.unobserve(section);
        });

        observer.current.disconnect();
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeId, router, data]);

  return (
    <TableOfContentContainer>
      <TableOfContentFixedHeight ref={tocContainerRef}>
        <Box marginBottom={4}>
          <Typography variant="h5" marginBottom={1.75}>
            Share article on:
          </Typography>

          <Box marginBottom={4}>
            <SocialIcons data={socialIcons} />
          </Box>

          <ImageWrapperComponent data={image} smallSize />
        </Box>

        <Typography variant="h5" marginBottom={1.75}>
          Table of Contents
        </Typography>

        <Stack spacing={2} marginBottom="52px">
          {data.length > 0
            ? data.map((item, index) => (
                <TocLink
                  key={`${item.id}-${index}`}
                  isActive={activeId === item.id}
                  href={item.id}
                  title={item.title}
                  level={item.level}
                />
              ))
            : null}
        </Stack>
      </TableOfContentFixedHeight>
    </TableOfContentContainer>
  );
};

export default TableOfContent;
