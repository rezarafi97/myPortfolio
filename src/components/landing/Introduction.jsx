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
            href="https://mstorage2.jobinjacdn.com/records/files/uploads/documents/a74b4ada-ab6f-4da9-831e-17c0ea81529f.pdf?requester=352e3132312e3234342e313338&resource=753a32343937353333&from=6170706c69636174696f6e5f666f726d&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20231202%2F%2Fs3%2Faws4_request&X-Amz-Date=20231202T143752Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=0e3c216de1f8bb89937ee4212402e8793724cc12dcdccd13f9022e368a86e350"
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
