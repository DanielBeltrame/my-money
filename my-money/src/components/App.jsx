import NavbarComp from "./partials/Navbar";
import HeaderPresentation from "./HeaderPresentation";

function App() {
  return (
    <>
    <header>
      <div className="App">
        <NavbarComp />
      </div>
      <div id="header-text">
        <HeaderPresentation />
      </div>
    </header>
    </>
  );
}

export default App;
