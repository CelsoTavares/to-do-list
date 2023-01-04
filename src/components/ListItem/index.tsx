import React, { useState } from "react";
import { Container } from "./styles";
import { Item } from "../../types/item";

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const [isChecked, setIschecked] = useState(item.done);

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIschecked(e.target.checked)}
      />
      <label>{item.name} </label>
    </Container>
  );
};

export default ListItem;
