import { theme } from '../chakra/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function MyApp({Component, pageProps}:AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
