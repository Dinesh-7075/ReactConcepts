import React, { useState } from 'react';

function DragAndDrop() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  let dragItem;

  const handleDragStart = (e, index) => {
    dragItem = index;
  };

  const handleDrop = (e, index) => {
    const newItems = [...items];
    const [removedItem] = newItems.splice(dragItem, 1);
    newItems.splice(index, 0, removedItem);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={(e) => e.preventDefault()}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragAndDrop;