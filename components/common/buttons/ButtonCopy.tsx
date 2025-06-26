import Tooltip from '@mui/material/Tooltip';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
// Cannot use internal `Button` component from `components/common/buttons/Button.tsx`
// because it hides `Tooltip` somehow
import MUIButton from '@mui/material/Button';

interface ButtonCopyProps {
  onClick: () => void;
  isCopied: boolean;
}

const ButtonCopy = ({ onClick, isCopied }: ButtonCopyProps) => {
  return (
    <Tooltip title={isCopied ? 'Link copied' : 'Copy link'}>
      <MUIButton
        onClick={onClick}
        aria-label={isCopied ? 'Link copied' : 'Copy link'}
        size="small"
        variant="text"
        sx={{
          padding: '0 4px',
          width: 'auto',
          minWidth: 'unset',
        }}
      >
        {isCopied ? (
          <AddLinkOutlinedIcon fontSize="small" />
        ) : (
          <InsertLinkOutlinedIcon fontSize="small" />
        )}
      </MUIButton>
    </Tooltip>
  );
};

export default ButtonCopy;
