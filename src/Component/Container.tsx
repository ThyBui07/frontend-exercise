import { useState } from "react";

import Header from "./Header";
import Item from "./Item";
import { List } from "../interface";
import SearchBar from "./SearchBar";

interface ContainerProps {
  title: string;
  description: string;
  lists: List[];
}

function Container({ title, description, lists }: ContainerProps) {
  const [input, setInput] = useState<string>("");
  const [provider, setProvider] = useState<string>("DEFAULT");
  const updateInput = (input: string): void => {
    setInput(input);
  };
  const updateProvider = (provider: string): void => {
    setProvider(provider);
  };

  return (
    <div className="container">
      <Header title={title} description={description} />
      <SearchBar receiveInput={updateInput} selectProvider={updateProvider} />

      {lists.map((list) => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <Item
            items={list.items}
            userInput={input}
            selectedProvider={provider}
          />
        </div>
      ))}
    </div>
  );
}

export default Container;
