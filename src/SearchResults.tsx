import { h, createElement } from "preact";
import * as Icons from "@radix-ui/react-icons";
import styles from "./style.css";
import ImportButton from "./ImportButton";

type SearchResultsProps = {
  value: string;
};

const iconNames = Object.keys(Icons).map((key) => {
  switch (key) {
    // Logos using original PascalCase naming can't be automated
    case "GitHubLogoIcon":
      return "GitHub Logo";
    case "IconJarLogoIcon":
      return "IconJar Logo";
    case "CodeSandboxLogoIcon":
      return "CodeSandbox Logo";
    case "CounterClockwiseClockIcon":
      return "Counter-Clockwise Clock";
    case "RotateCounterClockwiseIcon":
      return "Rotate Counter-Clockwise";

    // Naïve UpperCamelCaseIcon to Title Case conversion otherwise
    default:
      return key.replace(/Icon$/, "").replace(/(.)([0-9A-Z])/g, "$1 $2");
  }
});

export const SearchResults = ({ value }: SearchResultsProps) => {
  const cleanValue = value.trim().replace(/\s/g, " ");
  const matchingNames = iconNames.filter((name) =>
    new RegExp(`\\b${cleanValue}`, "gi").test(name)
  );

  if (matchingNames.length <= 0)
    return (
      <div class={styles.noResults}>
        No Icons found matching <span>{value}</span>
      </div>
    );

  const searchResult = matchingNames.map((name) => {
    return (
      <ImportButton label={name}>
        {createElement(Object.values(Icons)[iconNames.indexOf(name)], null)}
      </ImportButton>
    );
  });
  return <div class={styles.iconList}>{searchResult}</div>;
};
