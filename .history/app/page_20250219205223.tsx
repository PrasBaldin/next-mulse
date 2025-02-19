import '../next-i18next.config';

import Navbar from "./components/navbar";
import About from "./pages/about/page";


import { appWithTranslation } from 'next-i18next'

const MyApp = () => (
  <>
    <Navbar />
    <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out py-5">
      <div className="container">
        <div className="py-5">
          <div className="py-10">
            <div className="py-10">
              <div className="py-10">
                <h1>Ini Halaman Home</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
  </>
);

export default appWithTranslation(MyApp)

