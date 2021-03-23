import "./App.css";
import UIWithBadAPI from "./UIWithBad";
import UIWithOverloads from "./UIWithOverloads";
import UIWithOverloadsAndEnums from "./UIWithOverloadsAndEnums";
import UIWithEventMap from "./UIWithEventMap";
import UIWithFuncs from "./UIWithFuncs";

function App() {
  return (
    <div className="App">
      <UIWithBadAPI />
      <UIWithOverloads />
      <UIWithOverloadsAndEnums />
      <UIWithEventMap />
      <UIWithFuncs />
    </div>
  );
}

export default App;
