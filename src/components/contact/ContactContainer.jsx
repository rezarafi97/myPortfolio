import { ContactForm, ContactIcons } from ".";

const ContactContainer = () => {
  const divClass = "h-[calc(100dvh)] flex flex-col items-center justify-between";

  return (
    <div className={divClass}>
      <div className="h-[calc(100dvh)] flex flex-col justify-around gap-6">
        <ContactIcons />

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
