import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import AttributeCount from "./components/AttributeCount";
import ClassList from "./components/ClassList";
import AttributeProvider from "./context/attributeContext";
import { Attributes } from "./types";
function App() {
  return (
    <AttributeProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Coding Exercise</h1>
        </header>

        <div className="content-container">
          <div className="content-box">
            <h2>Attributes</h2>
            <div className="AttributeCount">
              {ATTRIBUTE_LIST.map((attribute) => {
                return (
                  <AttributeCount attribute={attribute as keyof Attributes} />
                );
              })}
            </div>
          </div>

          <div className="content-box">
            <h2>Classes</h2>
            <div id="ClassList">
              {Object.entries(CLASS_LIST).map(
                ([className, minimumAttributesRequired]) => {
                  return (
                    <ClassList
                      className={className}
                      minimumAttributesRequired={minimumAttributesRequired}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>

        <section className="App-section"></section>
      </div>
    </AttributeProvider>
  );
}

export default App;
