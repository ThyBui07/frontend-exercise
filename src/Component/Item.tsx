import { Item } from "../interface";

interface ItemProps {
  selectedProvider: string;
  userInput: string;
  items: Item[];
}

function Item({ items, userInput, selectedProvider }: ItemProps) {
  const filteredItems = items.filter((item) => {
    if (selectedProvider === "DEFAULT") {
      return item;
    } else {
      return item.provider === selectedProvider;
    }
  });
  const filteredData = filteredItems.filter((filteredItem) => {
    if (userInput === "") {
      return filteredItem;
    } else {
      return filteredItem.title.toLowerCase().includes(userInput);
    }
  });
  
  if (filteredData.length != 0) {
    return (
      <div className="ItemsContainer">
        {filteredData &&
          filteredData.map((item) => (
            <div key={item.id}>
              <div className="ImgContainer">
                <img src={item.image} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
      </div>
    );
  } else {
    return (
      <div>
        Sorry, we couldn't find any match.<i className="fas fa-sad-cry"></i> Try
        refresh and search again?
      </div>
    );
  }
}

export default Item;
