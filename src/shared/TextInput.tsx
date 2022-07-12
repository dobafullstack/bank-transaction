import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { TextField } from "@mui/material";

type Props = {
  value: string;
  title: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
  type?: HTMLInputTypeAttribute;
  margin?: boolean;
};

export default function TextInput({
  value,
  title,
  placeholder,
  error,
  type,
  onChange,
  margin = true,
}: Props) {
  return (
    <TextField
      error={error}
      onChange={onChange}
      inputMode={type === "number" ? "numeric" : undefined}
      placeholder={placeholder}
      style={{
        marginBottom: margin ? 30 : 0,
      }}
      label={
        <p
          style={{
            display: "inline",
            fontFamily: "Quicksand",
            fontWeight: 500,
          }}
        >
          {title} <strong style={{ color: "#e90044" }}>*</strong>
        </p>
      }
      variant="outlined"
      aria-readonly
      fullWidth
      type={type}
      value={value}
    />
  );
}
