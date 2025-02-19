import '../next-i18next.config';

import Navbar from "./components/navbar";
import About from "./pages/about/page";


import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)