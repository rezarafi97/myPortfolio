const Footer = () => {
  const divClass =
    "flex justify-center items-center bg-p2 bg-opacity-30 border-t border-p2 h-20";
  const textClass = "text-p5 font-nunito text-lg font-semibold";

  return (
    <div className={divClass}>
      <p className={textClass}>This portfolio has been developed by Love</p>
    </div>
  );
};

export default Footer;
