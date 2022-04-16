import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-6 sm:px-16 md:px-24 lg:px-28 my-14 ">
      <div className="col-span-12 text-center bg-white md:col-span-4 lg:col-span-3 rounded-2xl">
        <Leftbar />
      </div>
      <div className="flex flex-col col-span-12 bg-white md:col-span-8 lg:col-span-9 rounded-2xl">
        <Rightbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
