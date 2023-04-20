import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface LoadingProps {
  fullWidth?: boolean;
}

const Loading = ({ fullWidth }: LoadingProps) => {
  return (
    <Box sx={{ width: fullWidth ? '100%' : 300 }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default Loading;
