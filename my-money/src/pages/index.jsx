import NavbarComp from "../components/partials/Navbar";
import HeaderPresentation from "../components/HeaderPresentation";
import MiddleSection from "../components/MiddleSection";
import Sidebar from "../components/Sidebar";
import ScrollUp from "../components/ArrowUp";

function HomePage() {
  return (
    <>
    <nav>
      <div className="App">
        <NavbarComp />
        <ScrollUp />
      </div>
      <div id="header-text">
        <HeaderPresentation />
        <aside>
          <Sidebar />
        </aside>
      </div>
    </nav>

    {/* <aside id="sidebar">
      <Sidebar />
    </aside> */}

    <hr />

    <section id="middle-section">
      <MiddleSection />
    </section>
    </>
  );
}

export default HomePage;
