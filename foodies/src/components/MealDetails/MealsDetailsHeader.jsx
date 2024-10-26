import Image from "next/image";

export default function MealsDetailsHeader({ image,title,creator,summary }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-[27rem] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start md:px-10">
        <h1 className=" text-4xl md:text-5xl font-extrabold uppercase md:leading-snug">
          {title}
        </h1>
        <p className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 bg-clip-text text-transparent text-xl md:text-2xl my-4 tracking-wide">
          by {creator}
        </p>
        <div className="flex flex-col sm:flex-row text-lg">{summary}</div>
      </div>
    </header>
  );
}
