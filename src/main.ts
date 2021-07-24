import { showUI } from "@create-figma-plugin/utilities";
import { on, emit } from "@create-figma-plugin/utilities";
import { setRelaunchButton } from "@create-figma-plugin/utilities";
export default function () {
  setRelaunchButton(figma.currentPage, "radixIcons", {
    description: "A crisp set of 15×15 icons designed by the Modulz team.",
  });
  const options = { width: 300, height: 400 };
  showUI(options);

  let iconPlacementPosition = 0; // this is what keeps newly added icons from overlapping with each other
  on("IMPORT", ({ svg, label }) => {
    const iconNode = figma.createNodeFromSvg(svg);
    iconNode.name = label;
    iconNode.x = iconPlacementPosition;
    iconNode.rescale(2);
    figma.currentPage.appendChild(iconNode);
    iconPlacementPosition = iconPlacementPosition + iconNode.width + 10;
    figma.viewport.scrollAndZoomIntoView([iconNode]);
  });
}
