import Navbar from "../components/navbar";
import About from "./about/page";

const MyApp = () => (
  <>
    <Navbar />
    <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out py-5">
      <div className="container">
        <div className="py-5">
          <div className="py-[100rem]">
            <h1>Ini Halaman Home</h1>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MyApp

