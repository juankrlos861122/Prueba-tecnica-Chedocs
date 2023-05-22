interface Props {
  type: string;
  text: string;
}

const HomeList: React.FC<Props> = ({ type, text }) => {
  return (
    <div>
      <article className=" hover:border-4 border-white hover:opacity-80 shadow-inner flex flex-col justify-center items-center main-card hover:cursor-pointer">
        <h2 className="uppercase text-white font-bold text-5xl">{type}</h2>
        <p className="text-white">{text}</p>
      </article>
    </div>
  );
};

export default HomeList;
