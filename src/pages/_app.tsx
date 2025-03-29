import "../css/home.scss" // Use the correct path to your CSS file
import "../css/global.scss"
import { AppProps } from 'next/app';
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react';
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return  <QueryClientProvider client={queryClient}> <ChakraProvider><ColorModeScript initialColorMode="light"></ColorModeScript><Component {...pageProps} /></ChakraProvider></QueryClientProvider>;
}

export default MyApp;