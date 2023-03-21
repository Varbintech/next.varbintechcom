import NextjsLink from 'next/link';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Main from '../components/common/Main';

import Head from './components/Head';

export default function About() {
  return (
    <>
      <Head />

      <Main>
        <Box>
          Back to{' '}
          <Link href="/" variant="body1" component={NextjsLink}>
            Home
          </Link>
        </Box>

        <Box>
          <Typography variant="h1" gutterBottom>
            About
          </Typography>
        </Box>

        <Box>
          Hello World. <Link href="/about">About</Link>
        </Box>

        <Box>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>

          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>

          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>

          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>

          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>

          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
            tenetur
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
            tenetur
          </Typography>

          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
            numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>

          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
            numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>

          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>

          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>

          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Button variant="contained">Contained</Button>
        </Box>
        <Box marginBottom={2}>
          <Button variant="outlined">Outlined</Button>
        </Box>
        <Box marginBottom={2}>
          <Button variant="contained" color="info">
            Contained Info
          </Button>
        </Box>
        <Box marginBottom={2}>
          <Button variant="outlined" color="info">
            Outlined Info
          </Button>
        </Box>
        <Box marginBottom={2}>
          <Link href="#link" variant="body1" component={NextjsLink}>
            Link
          </Link>
        </Box>
      </Main>
    </>
  );
}
