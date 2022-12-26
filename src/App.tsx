import data from "../api/games/lists.json";
import Container from "./Component/Container";

function App() {
  return (
    <div className="grid">
      <div className="first"></div>
      <div className="second">
        <>
          <Container
            title={data.title}
            description={data.description}
            lists={data.lists}
          />
        </>
      </div>
      <div className="third"></div>
    </div>
  );
}

export default App;
