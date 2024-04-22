import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css"

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div>Open the following dropdown for Crash:</div>
      <DropdownList
        data={["Red", "Yellow", "Blue", "Orange"]}
      />
      <div>This one works 🤷‍♂️</div>
      <DropdownList
        data={["Red", "Yellow", "Blue", "Orange"]}
        defaultValue="Red"
      />
    </div>
  );
}

export default App;
