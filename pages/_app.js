import '../styles/globals.css'
import Layout from '../components/general/layout'
import {ApolloProvider} from '@apollo/client';
import client from '../components/Apollo/ApolloClient';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client} >
      <Layout>
          <Component {...pageProps} />
      </Layout>
  </ApolloProvider>)
}

export default MyApp
