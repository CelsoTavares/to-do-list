import React, { useState, KeyboardEvent, MouseEvent } from "react";
import { Container } from "./styles";
import { IoIosAddCircleOutline } from "react-icons/io";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddSpace = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <Container>
      <div onClick={handleClick}>
        <IoIosAddCircleOutline color="#FFF" size={25} />
      </div>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a task"
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};

export default AddSpace;
