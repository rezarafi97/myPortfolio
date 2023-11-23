import { useState } from "react";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formClass =
    "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-3 lg:grid-rows-4 gap-4 md:gap-6 lg:gap-8 w-full";
  const inputClass =
    "col-span-2 md:col-span-4 lg:col-span-6 px-4 py-1 md:py-2 border-b border-p2 bg-white bg-opacity-0 outline-0 placeholder:text-white text-white font-josefin font-normal text-sm placeholder:text-opacity-50";
  const textareaClass =
    "col-span-2 md:col-span-4 lg:col-span-6 row-span-2 resize-none px-4 py-1 md:py-2 border-b border-p2 bg-white bg-opacity-0 outline-0 placeholder:text-white text-white font-josefin font-normal text-sm placeholder:text-opacity-50";
  const buttonClass =
    "rounded py-2 md:py-3 lg:py-2 text-center h-8 md:h-12 col-start-2 col-end-2 md:col-start-4 md:col-end-4 lg:col-start-6 lg:col-end-6 text-white font-josefin font-medium text-sm md:text-base lg:text-lg bg-p5";

  return (
    <>
      <form className={formClass}>
        <input
          type="text"
          placeholder="Subject"
          className={inputClass}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className={textareaClass}
          onChange={(e) => setMessage(e.target.value)}
        />
        <a
          href={`mailto:rezarafi901@gmail.com?subject = ${subject}&body = ${message}`}
          className={buttonClass}
        >
          send
        </a>
      </form>
    </>
  );
};

export default ContactForm;
