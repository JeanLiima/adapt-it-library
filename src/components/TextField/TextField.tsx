import { InputHTMLAttributes } from "react";

import Styles from "./styles.module.scss"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function TextField(props: Props) {
  return (
    <div
      className={Styles.text}
    >
      <span>{props.label}</span>
      <input {...props} />
    </div>
  );
}

export default TextField;