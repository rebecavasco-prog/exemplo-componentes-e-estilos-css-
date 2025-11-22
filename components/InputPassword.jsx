import "./InputPassword.css";
import React, { useState } from "react";

export default function InputPassword({ placeholder }) {
  const [senha, setSenha] = useState("");

  return (
    <>
      <input
        type="password"
        placeholder={placeholder}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      {senha !== "" && <p>Senha digitada: {senha}</p>}
    </>
  );
}
