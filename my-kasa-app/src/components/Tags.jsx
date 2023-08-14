import React from "react";
import { useParams } from "react-router-dom";


export default function Tags({logements}) {
  let { pageId } = useParams();
  const logementData = logements[pageId];
  //   console.log(logementData);
  return (
    <>
      <div className="tags">{logementData.tags}</div>
    </>
  );
}
