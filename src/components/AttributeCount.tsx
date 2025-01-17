import { useContext } from "react";
import { AttributeContext } from "../context/attributeContext";
import { Attributes } from "../types";

interface AttributeCountProps {
  attribute: keyof Attributes;
}

function AttributeCount({ attribute }: AttributeCountProps) {
  const { attributes, dispatch } = useContext(AttributeContext);

  return (
    <div>
      <span>
        {attribute} : {attributes[attribute]}
      </span>
      <button
        style={{ marginLeft: "4px" }}
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
