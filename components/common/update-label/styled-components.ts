import { styled, keyframes } from '@mui/material/styles';

const animatedGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const animatedColor = keyframes`
  0% {
    color: #f79533;
  }

  10% {
    color: #f37055;
  }

  20% {
    color: #ef4e7b;
  }

  30% {
    color: #a166ab;
  }

  40% {
    color: #5073b8;
  }

  50% {
    color: #1098ad;
  }

  60% {
    color: #07b39b;
  }

  70% {
    color: #6fba82;
  }

  80% {
    color: #f79533;
  }

  90% {
    color: #f37055;
  }

  100% {
    color: #ef4e7b;
  }
`;

export const UpdateLabelContainer = styled('span')(({ theme }) => ({
  display: 'inline-block',
  padding: '8px 12px',
  textTransform: 'uppercase',
  lineHeight: 1,
  color: theme.palette.success.main,
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: '4px',

  span: {
    position: 'relative',
    zIndex: 2,
  },

  '&.gradient-border': {
    borderWidth: '1px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    borderColor: 'transparent',
    animation: `${animatedColor} 3s ease alternate infinite`,
    fontWeight: 500,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      height: 'calc(100% + 4px)',
      width: 'calc(100% + 4px)',
      zIndex: 1,
      borderRadius: '10px',
      background:
        'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
      backgroundSize: '300% 300%',
      animation: `${animatedGradient} 3s ease alternate infinite`,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: '100%',
      width: '100%',
      zIndex: 1,
      borderRadius: '8px',
      backgroundColor: theme.palette.background.paper,
    },
  },

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  },

  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(1),
  },
}));
