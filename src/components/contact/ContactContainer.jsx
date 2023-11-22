import { ContactForm, ContactIcons } from ".";

const ContactContainer = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className="flex justify-center py-2 md:py-4">
        <p className="text-white font-bold text-xl font-nunito">About</p>
      </div>

      <ContactIcons />

      <ContactForm />
    </div>
  );
};

export default ContactContainer;
