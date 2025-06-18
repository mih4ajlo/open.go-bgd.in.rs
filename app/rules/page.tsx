import React from "react";

export default function page() {
  return (
    <div className="w-1/2 m-auto">
      <ul>
        <li className="py-2">
          Rules: The tournament consists of five rounds McMahon with Candian
          time, 1 hour basic and 5 minutes for 10 moves, komi 6,5 points.
          Japanese/EGF rules (subject to changes depending on the number of
          participants).
        </li>
        <li className="py-2">
          Participation fee:
          <ul>
            <li>Before 15th of July: 15€</li>
            <li>Before 1st of October: 20€</li>
            <li>After 1st of October: 25€</li>
            <li>For members of Serbian Go federation: 10€ - 15€ - 20€</li>
            
          </ul>
        </li>

        <li>
          <div className="flex gap-8 mt-8">
            <ol className="">
              Saturday:
              <li>End of registration: 9:30 </li>
              <li>I round : 10:00 - 12:30</li>
              <li>II round : 13:30 - 15:30</li>
              <li>III round : 16:00 - 18:30</li>
            </ol>
            <ol>
              Sunday:
              <li>IV round : 10:00 - 12:30</li>
              <li>V round : 13:30 - 15:30</li>
            </ol>
          </div>
        </li>
        <li className="py-2">
          Prizes:
          <p className="ml-8">
            to be announced
            {/* I place : 100 eur <br/> II place: 50 eur <br/> III place: 30 eur   */}
          </p>
        </li>
      </ul>
    </div>
  );
}
