import { ThemeProvider } from "next-themes";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 p-5 m-5">
        <div className="h-screen col-span-12 overflow-hidden shadow-custom-light dark:shadow-custom-dark text-center bg-slate-700 rounded-2xl left-bar dark:bg-mydark md:col-span-4 lg:col-span-3 ">
          <Leftbar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden shadow-custom-light dark:shadow-custom-dark bg-white dark:bg-mydark-200 rounded-2xl right-bar md:col-span-8 lg:col-span-9">
          <Rightbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
