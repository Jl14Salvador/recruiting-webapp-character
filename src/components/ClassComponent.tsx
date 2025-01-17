import { useContext, useState } from "react";
import { AttributeContext } from "../context/attributeContext";
import { AttributesContext } from "../types";

interface ClassComponentProps {
  className: string;
  minimumAttributesRequired: Record<keyof AttributesContext, number>;
}

function ClassComponent({
  className,
  minimumAttributesRequired,
}: ClassComponentProps) {
  const { attributes } = useContext(AttributeContext);
  const [isSelected, setIsSelected] = useState(false);

  const classSelected = Object.entries(attributes).every(
    ([attribute, value]) => value >= minimumAttributesRequired[attribute]
  );

  const style = {
    color: classSelected ? "red" : "inherit",
    cursor: "pointer",
  };

  return (
    <>
      <div
        className="class"
        style={style}
        onClick={() => setIsSelected(!isSelected)}
      >
        {className}
      </div>

      {isSelected && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h4>Minimum Requirements for {className}:</h4>
              {Object.entries(minimumAttributesRequired).map(
                ([attr, value]) => (
                  <div key={attr}>
                    {attr}: {value}
                  </div>
                )
              )}
              <button
                className="close-button"
                onClick={() => setIsSelected(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClassComponent;
