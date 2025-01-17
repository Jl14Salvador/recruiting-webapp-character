import "./App.css";
import { SKILL_LIST } from "./consts";
import ClassList from "./components/ClassList";
import AttributeProvider from "./context/attributeContext";
import AttributeCountList from "./components/AttributeCountList";

function App() {
  return (
    <AttributeProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Coding Exercise</h1>
        </header>

        <div className="content-container">
          <AttributeCountList />
          <ClassList />
        </div>
      </div>
    </AttributeProvider>
  );
}

export default App;
