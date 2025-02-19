import Navbar from "./components/navbar";
import About from "./pages/about/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-grey-100">
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
