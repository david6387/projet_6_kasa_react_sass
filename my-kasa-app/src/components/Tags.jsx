import React from "react";
import { useParams } from "react-router-dom";

export default function Tags({ logements, title }) {
  let { pageId } = useParams();
  const logementData = logements[pageId];

  return (
    <li>{title}</li>
  );
}
