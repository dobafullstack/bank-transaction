import React, { ChangeEventHandler } from "react";
import { TextField } from "@mui/material";

type Props = {
  value: string;
  title: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
};

export default function TextInput({
  value,
  title,
  placeholder,
  error,
  onChange,
}: Props) {
  return (
    <TextField
      error={error}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        marginBottom: 30,
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
      value={value}
    />
  );
}
