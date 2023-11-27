const Introduction = () => {
  const listClass =
    "text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-semibold my-4";
  const spanClass =
    "text-p1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold";
  const bgClass = "bg-gradient-to-bl from-p4 to-p5 py-4 px-8 rounded-3xl";

  return (
    <div className="my-0 md:my-16 lg:my-0 mx-auto md:mx-0">
      <ul className={bgClass}>
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
            href="https://mstorage2.jobinjacdn.com/records/files/uploads/documents/29f9cc4f-fc5d-406a-a6f1-de0d8ec1e665.pdf?requester=36322e3231302e39302e3736&resource=753a32343937353333&from=6170706c69636174696f6e5f666f726d&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20231127%2F%2Fs3%2Faws4_request&X-Amz-Date=20231127T154410Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=7bf346531066fd0f40e24a0a889e6d59e8e2466a686f4e15b3bcdaf1d675c064"
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
