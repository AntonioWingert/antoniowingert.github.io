import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';
import { PrismicProvider } from '@prismicio/react'
import { client } from '../src/services/prismic';

interface Props {
  Component?: any,
  pageProps?: any,
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <PrismicProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
            <GlobalStyles />
        </ThemeProvider>
    </PrismicProvider>
  );
}

export default MyApp;
