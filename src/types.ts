export type AttributesContext = {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export type AttributeAction = {
  type: "increment" | "decrement";
  selectedAttribute: keyof AttributesContext;
};
