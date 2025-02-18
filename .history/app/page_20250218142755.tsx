import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>Ini Home Page</div><svg
        className="w-4 h-4 text-gray-600 hover:text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </>
  );
}
