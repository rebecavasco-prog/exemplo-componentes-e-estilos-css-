import "./Label.css";
import React, { useState } from "react";

export default function Label({ texto }) {
  const [valor] = useState(texto);

  return <label className="label">{valor}</label>;
}
