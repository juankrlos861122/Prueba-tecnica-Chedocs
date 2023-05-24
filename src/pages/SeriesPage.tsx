import axios from "axios";
import { useState, useEffect } from "react";

import ImageCard from "@components/ImageCard";
import NavTitle from "../components/NavTitle";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadSeries() {
      try {
        const { data } = await axios.get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed//sample.json"
        );
        const seriesfiltered = data.entries;
        const seriesRes = seriesfiltered
          .sort((a: any, b: any) => b.title < a.title)
          .filter(
            (info: any) => info.programType === "series" && info.releaseYear >= 2010
          );
        setIsLoading(false);
        setSeries(seriesRes);
      } catch (err) {
        console.log("El error esta pasando por: ", err);
        setIsLoading(true);
      }
    }
    loadSeries();
  }, []);

  return (
    <main className="">
      <NavTitle title={"Series"} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="m-auto max-w-7xl grid grid-cols-5 gap-4 my-10">
            {series
              .map((serie: [], index: number) => (
                <ImageCard key={index} data={serie} />
              ))
              .slice(0, 20)}
          </div>
          <Pagination max={series.length} />
        </>
      )}
    </main>
  );
};

export default SeriesPage;
