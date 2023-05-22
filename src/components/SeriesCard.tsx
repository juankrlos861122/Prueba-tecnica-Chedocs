interface Props {
  series: {
    title: string;
    description: string;
    programType: string;
    releaseYear: number;
    images: {
      "Poster Art": {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

const seriesCard: React.FC<Props> = ({ series }) => {
  return (
    <div>
      <img src={series.images["Poster Art"].url} alt={series.title} />
      <h3>{series.title}</h3>
    </div>
  );
};

export default seriesCard;
