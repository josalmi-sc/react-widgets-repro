import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css"

function App() {
  return (
    <div className="App">
      <DropdownList
        data={["Red", "Yellow", "Blue", "Orange"]}
      />
    </div>
  );
}

export default App;
