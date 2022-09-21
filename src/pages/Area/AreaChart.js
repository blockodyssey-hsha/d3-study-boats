import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const AreaChart = ({ data }) => {
  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 30, left: 50 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear().domain([0, 48]).range([0, width]);
    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => +d.value)])
      .range([height, 0]);

    // gradient 추가하기
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");
    gradient.append("stop").attr("stop-color", "#4ac0fb").attr("offset", "0%");
    gradient
      .append("stop")
      .attr("stop-color", "#ffffff")
      .attr("offset", "100%");

    const gradient2 = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient2")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");
    gradient2
      .append("stop")
      .attr("stop-color", "#2852EB80")
      .attr("offset", "0%");
    gradient2
      .append("stop")
      .attr("stop-color", "#ffffff")
      .attr("offset", "100%");

    // Add the area
    svg
      .append("path")
      .datum(data.slice(0, 15))
      .attr("fill", "url(#gradient)")
      .attr("stroke", "none")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .area()
          .x((d) => x(d.date))
          .y0(y(0))
          .y1((d) => y(d.value))
      );
    // Add the area
    svg
      .append("path")
      .datum(data.slice(14))
      .attr("fill", "url(#gradient2)")
      .attr("stroke", "none")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .area()
          .x((d) => x(d.date))
          .y0(y(0))
          .y1((d) => y(d.value))
      );
    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#2852EB")
      .attr("stroke-width", 3)
      .style("filter", "drop-shadow(0px 2px 6px #2852EB80)")
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.value);
          })
      );
    console.log(x.domain());
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickValues([0, 12, 24, 36, 48])
          .tickFormat((x) => {
            console.log(x);
            if (x === 0) return "0";
            return `${x / 12}년 차`;
          })
          .tickSize(0)
          .tickPadding(5)
      );
    svg
      .append("g")
      .call(d3.axisLeft(y).tickValues([0, 12, 24, 36, 48]).tickSize(0));
  }, [data]);

  console.log(data);

  return (
    <>
      <div id="my_dataviz" />
    </>
  );
};

export default AreaChart;
