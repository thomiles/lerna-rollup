import React, { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export const TextInput = (props: Props) => {
  return <input type="text" {...props} />;
};
