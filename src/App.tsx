import React, { useState } from "react";
import { Container, Space, Title } from "./styles/appStyles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import AddSpace from "./components/AddSpace";
import { RiDeleteBin2Fill } from "react-icons/ri";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: "Pagar boleto", done: true },
  ]);

  const handleAddTest = (taskName: string) => {
    const check = list.find((e) => e.name === taskName);
    if (check) return alert("Título já existe!");
    
    let newList = [...list];
    newList.push({
      id: list.length,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const del = (name: string) => {
    const filter = list.filter((item) => item.name !== name);
    setList(filter);
  };
  return (
    <Container>
      <Space>
        <Title>To-do list</Title>

        <AddSpace onEnter={handleAddTest} />

        {list.map((item, index) => (
          <div key={index} className="divList">
            <ListItem item={item} />
            <div>
              <span onClick={() => del(item.name)}>
                <RiDeleteBin2Fill size={25} />
              </span>
            </div>
          </div>
        ))}
      </Space>
    </Container>
  );
};

export default App;
