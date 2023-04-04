import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default Loading;
