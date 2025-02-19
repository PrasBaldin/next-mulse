import Navbar from "./components/navbar";
import About from "./pages/about/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 py-5">
        <br />
        <br />
        <br />
        <br />
        <div>Ini Home</div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <About />
    </>
  );
}
