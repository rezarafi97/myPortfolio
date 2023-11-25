import { ContactForm, ContactIcons } from ".";

const ContactContainer = () => {
  const divClass = "h-screen flex flex-col items-center justify-between";

  return (
    <div className={divClass}>
      <div className="h-screen flex flex-col justify-around gap-6">
        <ContactIcons />

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
