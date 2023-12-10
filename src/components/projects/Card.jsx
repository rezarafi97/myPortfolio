/* eslint-disable react/prop-types */
const Card = ({ p }) => {
  const titleClass = "font-nunito text-base lg:text-lg font-medium text-p2";
  const textClass = "font-josefin text-sm lg:text-base font-normal text-p2";
  const linkClass =
    "font-josefin text-sm md:text-base font-normal text-white hover:text-lg hover:font-medium";

  return (
    <>
      <div className=" w-full h-1/3 overflow-hidden">
        <img
          src={p.imageURL}
          alt="ecommerce"
          className="hidden lg:block lg:hover:scale-110 duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-between h-full lg:h-2/3">
        <div className="py-2 px-4 lg:py-4 lg:px-8">
          <h3 className={titleClass}>{p.title}</h3>
          <div className="w-full h-px bg-p2 bg-opacity-50 my-1 lg:my-4"></div>
          <p className={textClass}>{p.description}</p>
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