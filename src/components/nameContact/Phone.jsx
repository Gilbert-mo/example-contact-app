import { contacts } from "../../data/contacts";

function Phone({ phone, whatsApp, info }) {
  const phoneMovil = `+1 ${phone.substring(0, 3)} ${phone.substring(
    3,
    6
  )}-${phone.substring(6)}`;

  const phoneWs = `+1 (${phone.substring(0, 3)}) ${phone.substring(
    3,
    6
  )}-${phone.substring(6)}`;

  if (whatsApp && contacts.phone !== "") return <p>{phoneWs}</p>;

  if (contacts.phone !== "") {
    if (info) {
      return (
        <div className="flex flex-col text-sm md:text-base justify-start">
          <p className="">{phoneMovil}</p>
          <p className="ml-2">Móvil</p>
        </div>
      );
    }

    return (
      <div className="flex text-sm md:text-base items-center">
        <p className="mr-1">Móvil</p>
        <p className="">{phoneMovil}</p>
      </div>
    );
  }

  return <p></p>;
}

export default Phone;
