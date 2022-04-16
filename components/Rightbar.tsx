import React, { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Rightbar() {
  const [activeBar, setActiveBar] = React.useState<string | null>(null);

  return <div>rightbar</div>;
}

export default Rightbar;
