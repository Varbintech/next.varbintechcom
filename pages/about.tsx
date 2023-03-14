import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Main from '../components/common/Main';

import Head from './components/Head';

export default function About() {
  return (
    <>
      <Head />

      <Main>
        <Box>
          Back to <Link href="/">Home</Link>
        </Box>

        <Box>
          <Typography variant="h1" gutterBottom>
            About
          </Typography>
        </Box>
      </Main>
    </>
  );
}
