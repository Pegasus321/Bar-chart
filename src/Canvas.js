import React from "react";
import { useEffect } from "react";
import * as d3 from "d3";
export default function Canvas() {
  useEffect(() => {
    console.log("useEffect called");
    const svg = d3
      .select(".canva")
      .append("svg")
      .attr("width", 500)
      .attr("height", 250);

    svg.append("circle").attr("cx", 50).attr("cy", 50).attr("r", 50);
  }, []);
  return <div className="canva"></div>;
}
