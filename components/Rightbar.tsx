import React, { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Rightbar() {
  const [activeBar, setActiveBar] = React.useState<string | null>(null);

  const { pathname } = useRouter();
  React.useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveBar("About");
        break;
      case "/projects":
        setActiveBar("Projects");
        break;
      case "/resume":
        setActiveBar("Resume");
        break;
    }
  }, [pathname]);

  const RenderNavigation: FunctionComponent<{
    activeBar: string;
    setActivebar: Function;
    name: string;
    route: string;
  }> = ({ activeBar, setActivebar, name, route }) => {
    return activeBar !== name ? (
      <Link href={route}>
        <a>
          <span
            onClick={() => setActiveBar(name)}
            className="hover:text-green-400"
          >
            {name}
          </span>
        </a>
      </Link>
    ) : null;
  };

  return (
    <div className="flex justify-between px-5 py-2 my-2">
      <span className="text-xl font-bold text-green-400 border-b-4 border-green-200 md:text-2xl">
        {activeBar}
      </span>
      <div className="flex space-x-3 text-lg ">
        <RenderNavigation
          activeBar={activeBar}
          setActivebar={setActiveBar}
          name="About"
          route="/"
        />
        <RenderNavigation
          activeBar={activeBar}
          setActivebar={setActiveBar}
          name="Projects"
          route="/projects"
        />
        <RenderNavigation
          activeBar={activeBar}
          setActivebar={setActiveBar}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Rightbar;
