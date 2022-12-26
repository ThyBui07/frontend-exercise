import React, { KeyboardEvent, useEffect } from "react";

interface InputProps {
  receiveInput: (input: string) => void;
  selectProvider: (provider: string) => void;
}

function SearchBar({ receiveInput, selectProvider }: InputProps) {
  const [input, updateInput] = React.useState<string>("");
  const [provider, setProvider] = React.useState<string>("All Providers");

  const [searchItems, setSearchItems] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  let inputHandler = (e: React.ChangeEvent<any>): void => {
    updateInput(e.target.value);
  };

  let selectHandler = (e: React.ChangeEvent<any>): void => {
    selectProvider(e.target.value);
    if (e.target.value === "DEFAULT") {
      console.log("default");
      setProvider("All Providers");
    } else {
      setProvider(e.target.value);
    }
  };
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      var lowerCase = input.toLowerCase();
      receiveInput(lowerCase);
      setSearchItems([...searchItems, lowerCase]);
    }
    if (
      (e.key === "Backspace" && input.length == 1) ||
      (e.key === "Delete" && input.length == 1)
    ) {
      receiveInput("");
    }
  };
  useEffect(() => {
    const data = window.localStorage.getItem("searchItems");
    if (data !== null) {
      const obj = JSON.parse(data);
      setSearchItems(obj);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("searchItems", JSON.stringify(searchItems));
    if (searchItems != null && searchItems.length > 10) {
      searchItems.shift();
      setSearchItems([...searchItems]);
    }
  }, [searchItems]);
  
  return (
    <div className="SearchBar">
      <div className="SelectBox">
        <select defaultValue={"DEFAULT"} onChange={selectHandler}>
          <option value="DEFAULT">All Providers</option>
          <option value="Paf Studios">Paf Studios</option>
          <option value="NetEnt">NetEnt</option>
        </select>
      </div>
      <div className="SearchBox">
        <input
          type="search"
          maxLength={20}
          placeholder={`Find game in ${provider}...Enter to search`}
          value={input}
          onChange={inputHandler}
          onKeyDown={handleKeyDown}
          onFocus={toggling}
          onBlur={toggling}
        />
        <div className="SearchBoxDrop">
          <ul>
            {isOpen &&
              searchItems.length != 0 &&
              searchItems.map((item, index) => {
                return (
                  <li onMouseOver={() => updateInput(item)} key={index}>
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
