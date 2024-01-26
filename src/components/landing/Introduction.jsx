const Introduction = () => {
  const listClass =
    "text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold my-4";
  const spanClass =
    "text-p1 text-base md:text-lg lg:text-xl xl:text-2xl font-bold";
  const divClass =
    "h-[80vh] w-full md:w-1/2 bg-blob bg-center bg-no-repeat bg-contain flex items-center justify-center";

  return (
    <div className={divClass}>
      <ul>
        <li className={listClass}>
          I am <span className={spanClass}>Reza</span>
        </li>
        <li className={listClass}>
          I am <span className={spanClass}>Front End Developer</span>
        </li>
        <li className={listClass}>I develop modern, visually appealing</li>
        <li className={listClass}>and user-friendly web applications</li>
        <li className={listClass}>
          Click here to see{" "}
          <a
            href="https://mstorage2.jobinjacdn.com/records/files/uploads/documents/e2beecf4-acce-458a-ac17-fd5a8e262d3b.pdf?requester=352e3132312e39372e3333&resource=753a32343937353333&from=6170706c69636174696f6e5f666f726d&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20240126%2F%2Fs3%2Faws4_request&X-Amz-Date=20240126T162221Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=c005923380f1b96c17903f2b038735880c354f515427891acf06194ff7a3eec4"
            className={`${spanClass} animate-pulse`}
          >
            My Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Introduction;
