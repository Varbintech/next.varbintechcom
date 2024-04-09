import type { FC } from 'react';

import type { ProjectTag } from '../../../models';

import Chip, { type ChipProps } from './Chip';

interface ChipGroupProps {
  data: Array<ProjectTag>;
}

const ChipGroup: FC<ChipGroupProps> = ({ data }) => {
  return (
    <>
      {data.map((tag, tagIndex) => {
        const additionalProps: Pick<ChipProps, 'component' | 'href'> = tag.link
          ? {
              href: tag.link,
              component: 'a',
            }
          : {};

        return (
          <Chip
            {...additionalProps}
            key={tagIndex}
            label={tag.name}
            sx={{ margin: '0 8px 8px 0' }}
            clickable={Boolean(tag.link)}
          />
        );
      })}
    </>
  );
};

export default ChipGroup;
