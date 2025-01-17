import { CLASS_LIST } from "../consts";
import ClassComponent from "./ClassComponent";

function ClassList() {
  return (
    <>
      <div className="content-box">
        <h2>Classes</h2>
        <div id="ClassList">
          {Object.entries(CLASS_LIST).map(
            ([className, minimumAttributesRequired]) => {
              return (
                <ClassComponent
                  className={className}
                  minimumAttributesRequired={minimumAttributesRequired}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default ClassList;
