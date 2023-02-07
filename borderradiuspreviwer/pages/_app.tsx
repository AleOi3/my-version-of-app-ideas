import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { wrapper, } from "../redux/store/store";
import { Provider } from 'react-redux';

function App({ Component, pageProps }: AppProps) {

  return  <Component {...pageProps} />
}

export default wrapper.withRedux(App);
