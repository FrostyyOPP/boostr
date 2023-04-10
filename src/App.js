import { Category } from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import { BasicMasonry } from "./Components/Masonry/Masonry";
function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <BasicMasonry />
    </div>
  );
}

export default App;
