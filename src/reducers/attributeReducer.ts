import { Attributes, AttributeAction } from "../types";

export const attributeReducer = (
  state: Attributes,
  attribute: AttributeAction
) => {
  const { type, selectedAttribute } = attribute;
  switch (type) {
    case "decrement":
      return { ...state, [selectedAttribute]: state[selectedAttribute] - 1 };
    case "increment":
      return { ...state, [selectedAttribute]: state[selectedAttribute] + 1 };
    default:
      return state;
  }
};
