import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";

export default function Tags() {
  let { pageId } = useParams();
  const logementData = Logements[pageId];
  //   console.log(logementData);
  return (
    <>
      <div className="tags">{logementData.tags}</div>
    </>
  );
}
