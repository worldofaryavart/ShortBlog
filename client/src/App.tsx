import "./App.css";
import Navbar from "./component/Navbar";
import ShortBlogDesktop from "./component/ShortBlogDesktop";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Navbar/>
        <ShortBlogDesktop/>
      </div>
    </>
  );
}

export default App;
