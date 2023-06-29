import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose, IoMdArrowRoundBack } from "react-icons/io";

function SearchInput({
  value,
  onChangeSearchInupu,
  onFocus,
  onBlur,
  inputFocusSed,
  text,
  setText,
}) {
  useEffect(() => {
    if (text.length > 0 || value.length > 0) onFocus(true);
    onChangeSearchInupu(text || value);
  }, [text, value]);

  useEffect(() => {
    const handleKeyup = (e) => {
      if (e.key === "Escape") {
        onBlur(false);
        setText("");
        onChangeSearchInupu("");
      }
    };

    document.addEventListener("keyup", handleKeyup);

    return () => {
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  return (
    <div className="flex justify-center items-center text-gray-200 ">
      {inputFocusSed && (
        <button
          onClick={() => {
            onBlur(false);
            setText("");
            onChangeSearchInupu("");
          }}
          className="w-10 h-10 p-3 hover:bg-slate-600 rounded-ful flex justify-center items-center rounded-full mr-2 text-2xl
          "
        >
          {/* <BiArrowBack /> */}
          <IoMdArrowRoundBack />
        </button>
      )}
      <input
        type="text"
        value={text || value}
        onChange={(e) => {
          setText(e.target.value);
          return onChangeSearchInupu(e.target.value);
        }}
        placeholder="Busca contactos y lugares..."
        onFocus={() => onFocus(true)}
        className="w-full bg-gray-700 text-gray-100 outline-none"
      />
      {inputFocusSed && value.length > 0 && (
        <button
          onClick={() => {
            setText("");
            onChangeSearchInupu("");
          }}
          className="w-10 h-10 p-3 hover:bg-slate-600 rounded-ful text-6xl flex justify-center items-center rounded-full "
        >
          <IoMdClose />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
