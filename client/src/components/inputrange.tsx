"use client";
import React, { useState } from "react";
import { Range } from "react-range";

function InputRange() {
  const [values, setValues] = useState([50]);

  return (
    <Range
      step={0.1}
      min={0}
      max={100}
      values={values}
      onChange={(newValues) => setValues(newValues)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            backgroundColor: "#999",
          }}
        />
      )}
    />
  );
}

export default InputRange;
