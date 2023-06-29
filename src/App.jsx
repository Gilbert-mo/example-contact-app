import "./App.css";
import ListContact from "./components/ListContact";
import FormContact from "./components/FormContact";
import AddContactButton from "./components/buttons/AddContactButton";
import { ContactContext } from "./contexts/ContactContext";
import { useContext, useState } from "react";
import FormContactUpdate from "./components/FormContactUpdate";
import Header from "./components/header/Header";
import ContactInfo from "./components/contactInfo/ContactInfo";
import Messaje from "./components/Messaje/Messaje";
import { useMessajeStore } from "./store/messajeStore";

function App() {
  const { addFormActive, updateFormActive, contactSelected } =
    useContext(ContactContext);

  const [info, setInfo] = useState({});
  const [infoActive, setInfoActive] = useState(false);

  // store messaje
  const { show } = useMessajeStore();

  return (
    <>
      <Header
        onClickInfoFound={(value, active) => {
          setInfo(value);
          setInfoActive(active);
        }}
      />
      <main className="h-screen w-full mt-14">
        <article className="bg-gray-800 text-gray-200 h-screen overflow-y-scroll container mx-auto contact-list-container main-container">
          <AddContactButton />
          <ListContact
            onClickInfo={(value, active) => {
              setInfo(value);
              setInfoActive(active);
            }}
          />
        </article>
      </main>
      {addFormActive && <FormContact />}
      {/* <FormContact /> */}
      {updateFormActive && <FormContactUpdate contact={contactSelected} />}
      {infoActive && (
        <ContactInfo
          onClickInfo={(value, active) => {
            setInfo(value);
            setInfoActive(active);
          }}
          contact={info}
        />
      )}
      {show && <Messaje />}
    </>
  );
}

export default App;
