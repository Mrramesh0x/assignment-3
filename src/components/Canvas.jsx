import { useContext } from "react";
import { BuilderContext } from "../context/builderContext";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable"

import { CSS } from "@dnd-kit/utilities"

const SortableBlock = ({ block, handleUpdateBlock }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} className="sortable-block">
      <div {...attributes} {...listeners} className="drag-handle">
        Drag Block
      </div>

      {block.type === "text" && (
        <input
          className="block-input"
          placeholder="Enter text"
          value={block.content}
          onChange={(e) => handleUpdateBlock(block.id, e.target.value)}
        />
      )}

      {block.type === "header" && (
        <input
          className="block-input"
          placeholder="Enter header"
          value={block.content}
          onChange={(e) => handleUpdateBlock(block.id, e.target.value)}
        />
      )}

      {block.type === "image" && (
        <input
          className="block-input"
          placeholder="Enter image URL"
          value={block.content}
          onChange={(e) => handleUpdateBlock(block.id, e.target.value)}
        />
      )}
    </div>
  )
}

const Canvas = () => {
  const { blocks, handleUpdateBlock, handleReorderBlocks } =
    useContext(BuilderContext);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;
    if (active.id === over.id) return;

    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);

    const updatedBlocks = arrayMove(blocks, oldIndex, newIndex);

    handleReorderBlocks(updatedBlocks);
  };

  return (
    <div className="canvas-container">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={blocks.map((b) => b.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="canvas-area">
            {blocks.map((block) => (
              <SortableBlock
                key={block.id}
                block={block}
                handleUpdateBlock={handleUpdateBlock}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default Canvas