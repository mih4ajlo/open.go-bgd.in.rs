import Image from "next/image";

import kalisPic from "../public/slike/ljepava_kalemegdan.jpg";
import GoPic from "../public/slike/go_tabla.jpg";

import classes from "./header.module.css";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center ">
      <div className="flex gap-8 justify-center items-center">
        {/* <Image src={holPic} alt="asd" width={400} height={400} /> */}

        {/* <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <Image src={GossSVG} alt="asd" width={200} height={200} />
        </a> */}
        <div className="relative">
          <Image
            src={kalisPic}
            alt="novi sad square"
            width={800}
            className={`${classes.mask} `}
          />
          <Image
            src={GoPic}
            alt="hand of player placing go stone"
            width={800}
            className={` ${classes.maskOverlap}`}
          />
        </div>
      </div>

      {/* <Image src={centarPic} alt="asd" width={1200} height={400} className={classes.mask} /> */}
      <h1 className="sr-only">Belgrade open 2025 page</h1>

      <div className="text-2xl  lg:text-4xl !leading-tight mx-auto max-w-[70rem] text-center">
        <p className="text-heading text-3xl font-bold mb-4">
          Belgrade open 2025, 18.10 - 19.10.2025
        </p>
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-go-grid/30 to-transparent my-2" />
    </div>
  );
}
