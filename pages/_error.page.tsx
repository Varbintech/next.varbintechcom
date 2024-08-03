import type { NextPageContext } from 'next';
import NextErrorComponent, { type ErrorProps } from 'next/error';
import { captureUnderscoreErrorException } from '@sentry/nextjs';

const CustomErrorComponent = (props: ErrorProps) => <NextErrorComponent {...props} />;

CustomErrorComponent.getInitialProps = async (contextData: NextPageContext) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
