import Image from "next/image";

import kifuMasterLogo from "../../public/slike/kifumasterlogo.png";

export default function page() {
  return (
    <div className="sm:w-2/3 w-1/2 m-auto">
      <div>
        <h1 className="text-[2rem] pb-4">Sponsor</h1>

        <a
          href="https://kifu-master.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4"
        >
          <Image src={kifuMasterLogo} alt="Kifu Master" className="w-1/3" />
        </a>

        <p className="pb-4">
          Kifu Master is proud to support Belgrade Open 2026. What we'd like
          to offer:
        </p>

        <ul className="list-disc list-inside pb-4">
          <li>1st place: 3 years of free Kifu Master Premium</li>
          <li>2nd place: 2 years of free Premium</li>
          <li>3rd place: 1 year of free Premium</li>
          <li>Every participant: 2 months of free Premium</li>
        </ul>
      </div>
    </div>
  );
}
