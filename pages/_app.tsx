import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';
import { PrismicProvider } from '@prismicio/react'
import { client } from '../src/services/prismic';
import NextNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

interface Props {
  Component?: any,
  pageProps?: any,
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <PrismicProvider client={client}>
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
          />
          <Toaster position="bottom-right" />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
    </PrismicProvider>
  );
}

export default MyApp;
