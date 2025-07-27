import { TocLinkStyled } from './styled-components';

interface TocLinkProps {
  href: string;
  title: string;
  isActive: boolean;
  level: string;
}

const TocLink = ({ href, title, isActive, level }: TocLinkProps) => {
  const levelClass = `level-${level}`;

  return (
    <TocLinkStyled
      href={`#${href}`}
      underline={isActive ? 'always' : 'none'}
      classes={{ root: isActive ? `isActive ${levelClass}` : levelClass }}
      component="a"
    >
      {title}
    </TocLinkStyled>
  );
};

export default TocLink;
