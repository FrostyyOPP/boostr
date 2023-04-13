import { Category } from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import { BasicMasonry } from "./Components/Masonry/Masonry";
import { Pexel } from "./Components/Pexel/Pexel";
function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <BasicMasonry />
      {/* <Pexel /> */}
    </div>
  );
}

export default App;
