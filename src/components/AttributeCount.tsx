import { useContext } from "react";
import { AttributeContext } from "../context/attributeContext";
import { AttributesContext } from "../types";

interface AttributeCountProps {
  attribute: keyof AttributesContext;
}

function AttributeCount({ attribute }: AttributeCountProps) {
  const { attributes, dispatch } = useContext(AttributeContext);

  return (
    <div>
      <span>
        {attribute} : {attributes[attribute]}
      </span>
      <span className="modifier">
        Modifier: {Math.floor((attributes[attribute] - 10) / 2)}
      </span>
      <button
        style={{ marginLeft: "6px" }}
        onClick={() =>
          dispatch({ type: "increment", selectedAttribute: attribute })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement", selectedAttribute: attribute })
        }
      >
        -
      </button>
    </div>
  );
}

export default AttributeCount;
