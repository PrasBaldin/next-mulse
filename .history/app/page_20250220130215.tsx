import Navbar from "../components/navbar";
import About from "./about/page";

const MyApp = () => (
  <>
    <Navbar />
    <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out py-5">
      <div className="container">
        <div className="py-5">
          <h1>Ini Halaman Home</h1>
          <div className="py-[100rem]">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem possimus ea necessitatibus incidunt placeat vero omnis aliquid doloremque, facere amet.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MyApp

