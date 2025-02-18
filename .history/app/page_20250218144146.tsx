import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>Ini Home Page</div>
      <br />
      <g>
        <div
          className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 rotate-[35] top-1/2 transform -translate-y-1/2}`}
        ></div>
        <div
          className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 -rotate-35 top-1/2 transform translate-y-1/2}`}
        ></div>
      </g>
      <br />
      <span className="ml-1 w-2.5 h-2.5 border-r-2 border-b-2 border-gray-700 inline-block transform rotate-45"></span>
    </>
  );
}
