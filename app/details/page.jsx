import Image from "next/image";

import mapa from "../../public/slike/mapa.png";

export default function page() {
  return (
    <div className="sm:w-2/3 w-1/2 m-auto">
      <div>
        <h1 className="text-[2rem] pb-2">Venue</h1>

        <p className="pb-4">
          The Student Dormitory "Patrijarh Pavle" in Belgrade, located just a
          30-minute walk from the city's main attractions, has been a reliable
          partner for years, as part of a long-standing collaboration with
          Belgrade ans Serbian GO community. Its strategic location, near major
          universities and public transportation, makes it a convenient and
          accessible option for students pursuing their academic goals in the
          city. 
        </p>

        <p>Address: Zdravka Čelara 14</p>
        <a href="https://maps.app.goo.gl/GNT99aZKgN75fRkG6s">
          <Image src={mapa} width={"w-1/3"} alt="mapa" />
        </a>
      </div>
      <div>
        <h1 className="text-[2rem] pb-2">Accomodation</h1>

        <a
          className="underline"
          href="https://www.booking.com/searchresults.en-gb.html?ss=Belgrade&ssne=Belgrade&ssne_untouched=Belgrade&efdco=1&label=belgrade-79FDxECyKEruy0tByBtb8AS541121738820%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-505767489992%3Alp1028595%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&aid=1610684&lang=en-gb&sb=1&src_elem=sb&src=city&dest_id=-74897&dest_type=city&checkin=2024-10-19&checkout=2024-10-20&group_adults=1&no_rooms=1&group_children=0&sb_travel_purpose=leisure&sb_lp=1"
        >
          Please check Booking for accomodation
        </a>
      </div>

      <div className="my-4">
        <h1 className="text-[2rem] pb-2 mt">Getting to Belgrade</h1>
        {/* <p>It's a one hour ride from Belgrade airport </p> */}
        Check{" "}
        <a href="https://global.flixbus.com/" className="underline">
          FlixBus
        </a>{" "}
        or{" "}
        <a className="underline" href="https://beg.aero/eng">
          Belgrade airport
        </a>
      </div>

      <div className="my-4">
        <h1 className="text-[2rem] pb-2">Other info</h1>
        <p>
          In Serbia officialy currency is dinar and excange rate for euro is
          ~117 din / 1 eur. Paying cards are widely accepted, and there is a lot
          of excange service places in the city
        </p>
      </div>
    </div>
  );
}
