import React from "react";
import { createClient } from "@/utils/supabase/server";

export async function generateMetadata({ params }) {
  return {
    title: 'Belgrade Open | Participants',
  }
}

const notToDisplay = ["created_at", "id", "e_mail", "rating","note"];

const maping = {
  "first_name": "Name", 
  "last_name":"Last name",
  "category":"Category",
  "rating":"Rating",
  "club":"Club",
  "country":"Country"
}

const bodyJSX = (participants) =>{
  const arrLa = [];
   participants?.forEach(( partic, ind) => {  
    
    let tempPar = Object.entries(partic);
    
    tempPar = [...[['','#']],...tempPar]
    
    const tem =  (
      <tr key={ind} className="border-b border-go-grid/20 hover:bg-neutral-panel/50 transition-colors duration-200">
        {tempPar.map(
          (el, elIndex) => {
            if(el[1]==='#') {
              return <td key={elIndex} className="px-4 py-3 text-center font-medium text-accent">{ind +1}</td>;
            }
            return notToDisplay.indexOf(el[0]) == -1 ? (
              <td key={elIndex} className="px-4 py-3 text-body">{el[1]}</td>
            ) : null
          }
        )}
      </tr>
    );
    arrLa.push(tem);
  });

  return arrLa;
}

const headJSX = (participants) => {

  if (! Array.isArray(participants) || participants.length ===0) {
    return <tr><td colSpan="6" className="text-center py-8 text-body">No participants registered yet</td></tr>;
  }

  let tempPar = Object.entries(participants[0])

  tempPar = [...[['#','']],...tempPar]

  return (
      <tr className="border-b-2 border-go-grid bg-neutral-panel">
        {tempPar.map(
          (el, i) => {
            if(el[0]==='#')return <th key={i} className="px-4 py-3 text-left font-bold text-heading">#</th>;
            return notToDisplay.indexOf(el[0]) == -1 ? (
              <th key={i} className="px-4 py-3 text-left font-bold text-heading">{ maping[el[0]] }</th>
            ) : null
          }
        )}
      </tr>
    );
  
};

const renderTable = (data = []) => {
  let headJ = headJSX(data);
  let bodJ =  bodyJSX(data);

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="card">
          <h1 className="text-heading text-3xl mb-6 text-center">Registered Participants</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>{headJ}</thead>
              <tbody>{bodJ}</tbody>
            </table>
          </div>
          
          {data && data.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-body">
                Total participants: <span className="text-accent font-bold">{data.length}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Participants() {
  
  const getParticipants = async () => {
    "use server";

    const supabase = createClient();

    const { data: participants } = await supabase
      .from("bg_open_participants")
      .select()
      .limit(50);

    return renderTable(participants);
  };

  let resp = getParticipants();

  return <>{resp}</>;
}
