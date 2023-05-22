interface Props {
  data: {
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

const ImageCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="hover:cursor-pointer hover:opacity-80">
      <img
        src={data.images["Poster Art"].url}
        alt={data.title}
        className=" hover:border-4 border-white"
      />
      <h3 className="font-bold uppercase text-center">{data.title}</h3>
    </div>
  );
};

export default ImageCard;
