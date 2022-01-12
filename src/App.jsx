import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return <div>
    <Intro/>
    <About />
    <ProductList />
  </div>;
};

export default App;