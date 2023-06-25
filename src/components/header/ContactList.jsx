import ContactFound from "./ContactFound";

function ContactList({ contacts, emptyHeading, onClickInfo }) {
  if (contacts.length === 0) {
    return (
      <>
        <div className="search-overlay"></div>
        <div className="h-screen">
          <h2 className="text-blue-400 text-2xl sm:text-3xl m-5 font-sans ml-6">{emptyHeading}</h2>;
        </div>
      </>
    );
  }

  let count = contacts.length;
  let heading = "";

  if (count > 0) {
    const noun = count > 1 ? "Contactos" : "Contacto";
    heading = `${count}  ${noun}`;
  }

  return (
    <section className="absolute top-16 left-0 z-10 h-screen w-full bg-gray-800 text-gray-50 container-list-search">
      <div className="h-screen overflow-y-scroll container mx-auto contact-list-container w-full">
        <div className="py-2 px-8 pl-6 ml-5 my-3 text-blue-500 font-medium">
          <h2>{heading}</h2>
        </div>
        {contacts.map((contact) => {
          return (
            <ContactFound
              key={contact.id}
              name={contact.name}
              lastName={contact.lastName}
              phone={contact.phone}
              path={contact.profilePicture}
              onClickInfo={onClickInfo}
              contact={contact}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ContactList;
