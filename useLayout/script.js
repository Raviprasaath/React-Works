import React, { useState, useRef, useLayoutEffect } from "react";

export default function Tooltip() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    // Measure DOM element before paint
    const { height } = ref.current.getBoundingClientRect();
    setHeight(height);
  }, []);

  return (
    <div>
      <div ref={ref} style={{ padding: "27px", background: "lightblue" }}>
        Tooltip Content
      </div>
      <p>Measured height: {height}px</p>
    </div>
  );
}