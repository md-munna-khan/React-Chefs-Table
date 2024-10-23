import Heder from "./components/Heder";
import Navbar from "./components/navbar";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* header section */}
      <Heder></Heder>
      {/* navbar */}
      <Navbar></Navbar>
      {/* recipe bar */}
      <Recipe></Recipe>
      {/* card section */}
      <section className="flex">
        {/* recipes bar */}
        <Recipes></Recipes>
        {/* side bar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;