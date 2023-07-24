import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
const App = () => {
  return (
    <div>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
    </div>
  );
};

export default App;
