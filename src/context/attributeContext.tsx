import { createContext, Dispatch, useReducer } from "react";
import { Attributes, AttributeAction } from "../types";
import { attributeReducer } from "../reducers/attributeReducer";

export const AttributeContext = createContext<{
  attributes: Attributes;
  dispatch: Dispatch<AttributeAction>;
}>({
  attributes: {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  },
  dispatch: () => {},
});

const AttributeProvider = ({ children }: { children: React.ReactNode }) => {
  const [attributes, dispatch] = useReducer(attributeReducer, {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  });

  return (
    <AttributeContext.Provider value={{ attributes, dispatch }}>
      {children}
    </AttributeContext.Provider>
  );
};
export default AttributeProvider;
