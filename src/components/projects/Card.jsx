/* eslint-disable react/prop-types */
const Card = ({ p }) => {
  const linkClass =
    "font-josefin text-sm md:text-base font-normal text-white hover:text-lg hover:font-medium";

  return (
    <>
      <img src={p.imageURL} alt="ecommerce" className="w-full h-1/3" />
      <div className="flex flex-col justify-between h-2/3">
        <div className="py-4 px-8">
          <h3 className="font-nunito text-base md:text-lg font-medium text-p2">
            {p.title}
          </h3>
          <div className="w-full h-px bg-p2 bg-opacity-50 my-4"></div>
          <p className="font-josefin text-sm md:text-base font-normal text-p2">
            {p.description}
          </p>
        </div>
        <div className="bg-p2 h-12 px-8 flex justify-between items-center">
          <a href={p.demo} className={linkClass}>
            view demo
          </a>
          <a href={p.source} className={linkClass}>
            source code
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
