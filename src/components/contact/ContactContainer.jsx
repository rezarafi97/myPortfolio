import { ContactForm, ContactIcons } from ".";

const ContactContainer = () => {
  const divClass = "h-screen flex flex-col items-center justify-between";
  const textClass = "text-white font-bold text-xl font-nunito";

  return (
    <div className={divClass}>
      <div className="flex justify-center py-2 md:py-4">
        <p className={textClass}>Contact</p>
      </div>

      <div className="h-4/5 flex flex-col justify-around gap-6">
        <ContactIcons />

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
