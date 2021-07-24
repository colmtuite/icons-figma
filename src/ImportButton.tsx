import { emit } from "@create-figma-plugin/utilities";
import styles from "./style.css";
import { h } from "preact";

type ImportButtonProps = {
  children?: React.ReactNode;
  label: string;
};
const ImportButton = ({ children, label }: ImportButtonProps) => {
  return (
    <button
      class={styles.icon}
      onClick={(event) => {
        const svgEl = event.currentTarget.querySelector("svg");
        const svg =
          svgEl && svgEl.parentElement ? svgEl.parentElement.innerHTML : null;

        emit("IMPORT", { label, svg });
      }}
    >
      {children}
    </button>
  );
};
export default ImportButton;
