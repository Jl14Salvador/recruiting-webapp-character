import { ATTRIBUTE_LIST } from "../consts";
import { AttributesContext } from "../types";
import AttributeCount from "./AttributeCount";

function AttributeCountList() {
  return (
    <div className="content-box">
      <h2>Attributes</h2>
      <div id="AttributeCount">
        {ATTRIBUTE_LIST.map((attribute) => {
          return (
            <AttributeCount attribute={attribute as keyof AttributesContext} />
          );
        })}
      </div>
    </div>
  );
}

export default AttributeCountList;
