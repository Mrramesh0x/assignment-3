import { useContext } from "react";
import { BuilderContext } from "../context/builderContext";

const Palette = () => {
  const { handleAddBlock } = useContext(BuilderContext);

  return (
    <div className="palette-container">
      <h2 className="palette-title">Add Blocks</h2>

      <div className="palette-buttons">
        <button
          className="palette-btn"
          onClick={() => handleAddBlock("text")}
        >
          Text
        </button>

        <button
          className="palette-btn"
          onClick={() => handleAddBlock("image")}
        >
          Image
        </button>

        <button
          className="palette-btn"
          onClick={() => handleAddBlock("header")}
        >
          Header
        </button>
      </div>
    </div>
  )
}

export default Palette