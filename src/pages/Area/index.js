import React, { useEffect, useState } from "react";
import AreaChart from "./AreaChart";
import * as d3 from "d3";

const Area = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",
      (d, i) => {
        if (i > 48) return;
        return { date: i, value: d.value };
      }
    ).then((data) => {
      setData(data);
    });
  }, []);

  return <>{data && <AreaChart data={data} />}</>;
};

export default Area;
