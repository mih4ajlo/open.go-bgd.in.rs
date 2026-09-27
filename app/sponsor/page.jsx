import Image from "next/image";

import kifuMasterLogo from "../../public/slike/kifumasterlogo.png";

export default function page() {
  return (
    <div className="sm:w-2/3 w-1/2 m-auto">
      <div>
        <h1 className="text-[2rem] pb-4">Sponsor</h1>

        <a
          href="https://kifumaster.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4"
        >
          <Image src={kifuMasterLogo} alt="Kifu Master" className="w-1/3" />
        </a>

        <p className="pb-4">
          We are delighted to announce additional prizes provided by Kifu
          Master, a professional Go game database for web and Android:
        </p>

        <ul className="list-disc list-inside pb-4">
          <li>1st place — 3 years of Kifu Master Premium</li>
          <li>2nd place — 2 years of Kifu Master Premium</li>
          <li>3rd place — 1 year of Kifu Master Premium</li>
          <li>Every participant — 2 months of Kifu Master Premium</li>
        </ul>

        <p className="pb-4">
          Kifu Master lets you search professional games by player or
          tournament, replay them with Guess the Move, and explore positions
          with Kifu Master&apos;s Go Pattern Search — coming very soon!
        </p>
      </div>
    </div>
  );
}
