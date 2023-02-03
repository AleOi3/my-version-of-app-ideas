import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <script src='/static/js/bootstrap.bundle.min.js' />
  </>
}
