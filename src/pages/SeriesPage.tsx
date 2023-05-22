import axios from "axios";
import { useState, useEffect } from "react";

import ImageCard from "@components/ImageCard";
import NavTitle from "../components/NavTitle";

const SeriesPage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function loadSeries() {
      try {
        const { data } = await axios.get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed//sample.json"
        );
        const seriesfiltered = data.entries;
        const seriesRes = seriesfiltered
          .sort((a, b) => b.title < a.title)
          .filter(
            (info: any) => info.programType === "series" && info.releaseYear >= 2010
          );

        setSeries(seriesRes);
      } catch (err) {
        console.error(err);
      }
    }
    loadSeries();
  }, []);

  return (
    <>
      <NavTitle title={"Series"} />
      <main className="m-auto max-w-7xl ">
        <div className="grid grid-cols-5 gap-4 my-10">
          {series
            .map((serie: [], index: number) => (
              <ImageCard key={index} data={serie} />
            ))
            .slice(0, 20)}
        </div>
      </main>
    </>
  );
};

export default SeriesPage;
