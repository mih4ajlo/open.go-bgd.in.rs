import React from "react";

export default function page() {
  return (
    <div className="w-3/4 m-auto">
      <ul>
        <li className="py-2">
          Rules: 
          <ul className="list-disc list-inside">
            <li>the tournament consists of five rounds McMahon with Fisher time 45 min + 15s/move (or Canadian
              time, 1 hour basic and 5 minutes for 10 moves)</li>
              <li>komi 6,5 points.</li>
              <li>japanese/EGF rules (subject to changes depending on the number of
              participants).</li>
          </ul>
        </li>
        <li className="py-2">
          Participation fee:
          <table>
              <colgroup>
                <col className="w-2/4" />
                <col className="w-1/4" />
                <col className="w-1/4 " />
              </colgroup>
            <thead>
              
              <tr>
                <th >Date</th>
                <th>Fees</th>
                <th className="text-center">GoSS members</th>
              </tr>
            </thead>
            <tbody className="[&>tr>td:not(:first-child)]:text-center">
              <tr>
                <td>Before 1st of October</td>
                <td>20€</td>
                <td>15€</td>
              </tr>
              <tr>
                <td>After 1st of October</td>
                <td>25€</td>
                <td>20€</td>
              </tr>
              <tr>
                <td>After 15th of October</td>
                <td>30€</td>
                <td>25€</td>
              </tr>
            </tbody>
          </table>
         
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
