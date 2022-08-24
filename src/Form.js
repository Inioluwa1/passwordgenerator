import React, { useState } from "react";
import Notify from "./Notify";
import Header from "./Header";
import Footer from "./Footer";
import { number, smallLetter, largeLetter, special } from "./Character";

export default function Form() {
  const [password, setpassword] = useState("");
  const [passwordlength, setpasswordlength] = useState(26);
  const [isnumberchecked, setnumberchecked] = useState(false);
  const [issymbolchecked, setsymbolchecked] = useState(false);
  const [islowercasechecked, setlowercasechecked] = useState(false);
  const [isuppercasechecked, setuppercasechecked] = useState(false);

  function handlegeneratepassword() {
    if (
      !isnumberchecked &&
      !issymbolchecked &&
      !islowercasechecked &&
      !isuppercasechecked
    ) {
      return (
        <div>
          <Notify note="Try again" />
        </div>
      );
    } else {
      let character = "";
      if (isnumberchecked) {
        character = character + number;
      }
      if (issymbolchecked) {
        character = character + special;
      }
      if (islowercasechecked) {
        character = character + smallLetter;
      }
      if (isuppercasechecked) {
        character = character + largeLetter;
      }
      setpassword(createPassword(character));
    }
  }
  function createPassword(character) {
    let password = "";
    const characterLength = character.length;
    for (let i = 0; i < passwordlength; i++) {
      const characterIndex = Math.round(Math.random() * characterLength);
      password = password + character.charAt(characterIndex);
    }
    return password;
  }

  return (
    <div className="Container">
      <Header />
      <div className="display"> {password} </div>
      <div className="passworded">
        <label htmlFor="passwordstrength"> Password strength </label>
        <input
          className="password"
          name="passwordstrength"
          id="passwordstrength"
          defaultValue={passwordlength}
          onChange={(e) => setpasswordlength(e.target.value)}
        />
      </div>
      <div className="Input">
        <label htmlFor="numbers"> Include Numbers </label>
        <input
          checked={isnumberchecked}
          type="checkbox"
          id="numbers"
          name="numbers"
          onChange={(e) => setnumberchecked(e.target.checked)}
        />
      </div>
      <div className="Input">
        <label htmlFor="symbols"> Include Special symbols </label>
        <input
          //checked={issymbolchecked}
          type="checkbox"
          id="symbols"
          name="symbols"
          onChange={(e) => setsymbolchecked(e.target.checked)}
        />
      </div>
      <div className="Input">
        <label htmlFor="smallLetter"> Include Small letters </label>
        <input
          checked={islowercasechecked}
          type="checkbox"
          id="smallLetter"
          name="smallLetter"
          onChange={(e) => setlowercasechecked(e.target.checked)}
        />
      </div>
      <div className="Input">
        <label htmlFor="largeLetter"> Include Capital letters </label>
        <input
          checked={isuppercasechecked}
          type="checkbox"
          id="largeLetter"
          name="largeLetter"
          onChange={(e) => setuppercasechecked(e.target.checked)}
        />
      </div>
      <button onClick={handlegeneratepassword}> Generate Password </button>
      <Notify />
      <Footer />
    </div>
  );
}
