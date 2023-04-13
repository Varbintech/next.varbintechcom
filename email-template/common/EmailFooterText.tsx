import { Text } from '@react-email/text';
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

import { footerSubParagraph, footerParagraph, footerImage, footerLogo } from '../styles';

export const EmailFooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Text style={footerSubParagraph}>
      <span
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        >
          Sent with
        </span>

        <Img
          src="https://res.cloudinary.com/dlxpwfaic/image/upload/v1681316524/varbintech/noto-heart_xs9acu.png"
          width="12"
          height="12"
          alt="heart emoji"
          style={footerImage}
        />

        <span
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        >
          from
        </span>

        <Link
          href="https://varbintech.com"
          aria-label="Varbintech Home Page"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
          target="_blank"
          rel="noreferrer"
        >
          <Img
            src="/images/vt-logo-short.jpeg"
            height="24"
            alt="Varbintech logo in footer"
            style={footerLogo}
          />
        </Link>
      </span>
      <br />
      <br />
      <span
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        To inspire powerful conversations and collaborations worldwide. Together we can change the
        world with creativity.
      </span>{' '}
      <br />
      <br />
      <span
        style={{
          display: 'inline-block',
          verticalAlign: 'bottom',
        }}
      >
        Copyright {currentYear} -{' '}
        <span style={footerParagraph}>
          <Link
            href="https://varbintech.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Varbintech Home Page"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              color: '#141629',
              textDecoration: 'underline',
            }}
          >
            Varbintech
          </Link>
        </span>
      </span>
    </Text>
  );
};
