import Hero from "@/components/hero";
import AboutPage from "./about/page";

const IndexPage = () => (
  <>
    <Hero />
    <section>
      <AboutPage />
    </section>
    <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out py-5">
      <div className="container">
        <div className="py-[15rem]">
          <h1>Ini Halaman Home</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem possimus ea necessitatibus incidunt placeat vero omnis aliquid doloremque, facere amet.</p>
          <div className="pb-[15rem]">
            <p>Div ke dua</p>
          </div>
          <div className="py-[20rem]"></div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage

