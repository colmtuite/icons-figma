import { Dropdown, render, SearchTextbox } from "@create-figma-plugin/ui";
import * as Icons from "@radix-ui/react-icons";
import { Fragment, h, JSX } from "preact";
import { useState } from "preact/hooks";
import styles from "./style.css";
import ImportButton from "./ImportButton";
import { SearchResults } from "./SearchResults";
const categories = [
  {
    value: "All",
  },
  {
    value: "Arrows",
  },
  {
    value: "Components",
  },
  {
    value: "Design",
  },
  {
    value: "Objects",
  },
  {
    value: "Typography",
  },
  {
    value: "Music",
  },
  {
    value: "Alignment",
  },
  {
    value: "Abstract",
  },
  {
    value: "Borders and corners",
  },
  {
    value: "Logos",
  },
];
function Plugin() {
  const [state, setState] = useState({
    selectedCategory: "All",
    searchTerm: "",
  });
  const handleSearch = (event: JSX.TargetedEvent<HTMLInputElement>) => {
    const searchTerm = event.currentTarget.value.toLowerCase();
    setState({ ...state, searchTerm });
  };

  const handleCategoryChange = (event: JSX.TargetedEvent<HTMLInputElement>) => {
    const selectedCategory = event.currentTarget.value;
    setState({ ...state, selectedCategory });
  };

  const { searchTerm, selectedCategory } = state;
  return (
    <Fragment>
      <div class={styles.filterContainer}>
        <SearchTextbox
          onInput={handleSearch}
          placeholder="Search Radix Icons"
          value={searchTerm}
          style={{ flex: 1 }}
        />
        <Dropdown
          style={{ flexBasis: 100 }}
          onChange={handleCategoryChange}
          options={categories}
          placeholder="Category"
          value={selectedCategory}
        />
      </div>
      {searchTerm ? (
        <SearchResults value={searchTerm} />
      ) : (
        <div class={styles.iconList}>
          {selectedCategory === "Arrows" || selectedCategory === "All" ? (
            <Arrows />
          ) : null}
          {selectedCategory === "Components" || selectedCategory === "All" ? (
            <Components />
          ) : null}
          {selectedCategory === "Design" || selectedCategory === "All" ? (
            <Design />
          ) : null}
          {selectedCategory === "Objects" || selectedCategory === "All" ? (
            <Objects />
          ) : null}
          {selectedCategory === "Typography" || selectedCategory === "All" ? (
            <Typography />
          ) : null}
          {selectedCategory === "Music" || selectedCategory === "All" ? (
            <Music />
          ) : null}
          {selectedCategory === "Alignment" || selectedCategory === "All" ? (
            <Alignment />
          ) : null}
          {selectedCategory === "Abstract" || selectedCategory === "All" ? (
            <Abstract />
          ) : null}
          {selectedCategory === "Borders and corners" ||
          selectedCategory === "All" ? (
            <Borders />
          ) : null}
          {selectedCategory === "Logos" || selectedCategory === "All" ? (
            <Logos />
          ) : null}
        </div>
      )}
    </Fragment>
  );
}

export default render(Plugin);

const Arrows = () => {
  return (
    <Fragment>
      <ImportButton label="Arrow Left">
        <Icons.ArrowLeftIcon scale={24} />
      </ImportButton>
      <ImportButton label="Arrow Right">
        <Icons.ArrowRightIcon />
      </ImportButton>
      <ImportButton label="Arrow Up">
        <Icons.ArrowUpIcon />
      </ImportButton>
      <ImportButton label="Arrow Down">
        <Icons.ArrowDownIcon />
      </ImportButton>
      <ImportButton label="Arrow Top Left ">
        <Icons.ArrowTopLeftIcon />
      </ImportButton>
      <ImportButton label="Arrow Top Right ">
        <Icons.ArrowTopRightIcon />
      </ImportButton>
      <ImportButton label="Arrow Bottom Left ">
        <Icons.ArrowBottomLeftIcon />
      </ImportButton>
      <ImportButton label="Arrow Bottom Right ">
        <Icons.ArrowBottomRightIcon />
      </ImportButton>
      <ImportButton label="Chevron Down">
        <Icons.ChevronDownIcon />
      </ImportButton>
      <ImportButton label="Chevron Left">
        <Icons.ChevronLeftIcon />
      </ImportButton>
      <ImportButton label="Chevron Right">
        <Icons.ChevronRightIcon />
      </ImportButton>
      <ImportButton label="Chevron Up">
        <Icons.ChevronUpIcon />
      </ImportButton>
      <ImportButton label="Double Arrow Down ">
        <Icons.DoubleArrowDownIcon />
      </ImportButton>
      <ImportButton label="Double Arrow Left ">
        <Icons.DoubleArrowLeftIcon />
      </ImportButton>
      <ImportButton label="Double Arrow Right ">
        <Icons.DoubleArrowRightIcon />
      </ImportButton>
      <ImportButton label="Double Arrow Up ">
        <Icons.DoubleArrowUpIcon />
      </ImportButton>
      <ImportButton label="Thick Arrow Left ">
        <Icons.ThickArrowLeftIcon />
      </ImportButton>
      <ImportButton label="Thick Arrow Right ">
        <Icons.ThickArrowRightIcon />
      </ImportButton>
      <ImportButton label="Thick Arrow Up ">
        <Icons.ThickArrowUpIcon />
      </ImportButton>
      <ImportButton label="Thick Arrow Down ">
        <Icons.ThickArrowDownIcon />
      </ImportButton>
      <ImportButton label="Triangle Left">
        <Icons.TriangleLeftIcon />
      </ImportButton>
      <ImportButton label="Triangle Right">
        <Icons.TriangleRightIcon />
      </ImportButton>
      <ImportButton label="Triangle Up">
        <Icons.TriangleUpIcon />
      </ImportButton>
      <ImportButton label="Triangle Down">
        <Icons.TriangleDownIcon />
      </ImportButton>
      <ImportButton label="Caret Left">
        <Icons.CaretLeftIcon />
      </ImportButton>
      <ImportButton label="Caret Right">
        <Icons.CaretRightIcon />
      </ImportButton>
      <ImportButton label="Caret Up">
        <Icons.CaretUpIcon />
      </ImportButton>
      <ImportButton label="Caret Down">
        <Icons.CaretDownIcon />
      </ImportButton>
      <ImportButton label="Caret Sort">
        <Icons.CaretSortIcon />
      </ImportButton>
      <ImportButton label="Width">
        <Icons.WidthIcon />
      </ImportButton>
      <ImportButton label="Height">
        <Icons.HeightIcon />
      </ImportButton>
      <ImportButton label="Size">
        <Icons.SizeIcon />
      </ImportButton>
      <ImportButton label="Move">
        <Icons.MoveIcon />
      </ImportButton>
      <ImportButton label="All Sides">
        <Icons.AllSidesIcon />
      </ImportButton>
    </Fragment>
  );
};

const Abstract = () => {
  return (
    <Fragment>
      <ImportButton label="Hamburger">
        <Icons.HamburgerMenuIcon />
      </ImportButton>
      <ImportButton label="Cross 1">
        <Icons.Cross1Icon />
      </ImportButton>
      <ImportButton label="Dots Horizontal">
        <Icons.DotsHorizontalIcon />
      </ImportButton>
      <ImportButton label="Dots Vertical">
        <Icons.DotsVerticalIcon />
      </ImportButton>
      <ImportButton label="Plus">
        <Icons.PlusIcon />
      </ImportButton>
      <ImportButton label="Minus">
        <Icons.MinusIcon />
      </ImportButton>
      <ImportButton label="Check">
        <Icons.CheckIcon />
      </ImportButton>
      <ImportButton label="Cross 2">
        <Icons.Cross2Icon />
      </ImportButton>
      <ImportButton label="Check Circled">
        <Icons.CheckCircledIcon />
      </ImportButton>
      <ImportButton label="Cross Circled">
        <Icons.CrossCircledIcon />
      </ImportButton>
      <ImportButton label="Plus Circled">
        <Icons.PlusCircledIcon />
      </ImportButton>
      <ImportButton label="Minus Circled">
        <Icons.MinusCircledIcon />
      </ImportButton>
      <ImportButton label="Question Mark">
        <Icons.QuestionMarkIcon />
      </ImportButton>
      <ImportButton label="Question Mark Circled ">
        <Icons.QuestionMarkCircledIcon />
      </ImportButton>
      <ImportButton label="Info Circled">
        <Icons.InfoCircledIcon />
      </ImportButton>
      <ImportButton label="Exclamation Triangle">
        <Icons.ExclamationTriangleIcon />
      </ImportButton>
      <ImportButton label="Share 1">
        <Icons.Share1Icon />
      </ImportButton>
      <ImportButton label="Share 2">
        <Icons.Share2Icon />
      </ImportButton>
      <ImportButton label="External Link">
        <Icons.ExternalLinkIcon />
      </ImportButton>
      <ImportButton label="Enter">
        <Icons.EnterIcon />
      </ImportButton>
      <ImportButton label="Exit">
        <Icons.ExitIcon />
      </ImportButton>
      <ImportButton label="Download">
        <Icons.DownloadIcon />
      </ImportButton>
      <ImportButton label="Upload">
        <Icons.UploadIcon />
      </ImportButton>
      <ImportButton label="Reset">
        <Icons.ResetIcon />
      </ImportButton>
      <ImportButton label="Reload">
        <Icons.ReloadIcon />
      </ImportButton>
      <ImportButton label="Update">
        <Icons.UpdateIcon />
      </ImportButton>
      <ImportButton label="Enter Full Screen ">
        <Icons.EnterFullScreenIcon />
      </ImportButton>
      <ImportButton label="Exit Full Screen ">
        <Icons.ExitFullScreenIcon />
      </ImportButton>
      <ImportButton label="Drag Handle Vertical ">
        <Icons.DragHandleVerticalIcon />
      </ImportButton>
      <ImportButton label="Drag Handle Horizontal ">
        <Icons.DragHandleHorizontalIcon />
      </ImportButton>
      <ImportButton label="Drag Handle Dots  1">
        <Icons.DragHandleDots1Icon />
      </ImportButton>
      <ImportButton label="Drag Handle Dots  2">
        <Icons.DragHandleDots2Icon />
      </ImportButton>
      <ImportButton label="Dot">
        <Icons.DotIcon />
      </ImportButton>
      <ImportButton label="Dot Filled">
        <Icons.DotFilledIcon />
      </ImportButton>
      <ImportButton label="Commit">
        <Icons.CommitIcon />
      </ImportButton>
      <ImportButton label="Slash">
        <Icons.SlashIcon />
      </ImportButton>
      <ImportButton label="Circle">
        <Icons.CircleIcon />
      </ImportButton>
      <ImportButton label="Circle Backslash">
        <Icons.CircleBackslashIcon />
      </ImportButton>
      <ImportButton label="Half 1">
        <Icons.Half1Icon />
      </ImportButton>
      <ImportButton label="Half 2">
        <Icons.Half2Icon />
      </ImportButton>
      <ImportButton label="View Vertical">
        <Icons.ViewVerticalIcon />
      </ImportButton>
      <ImportButton label="View Horizontal">
        <Icons.ViewHorizontalIcon />
      </ImportButton>
      <ImportButton label="View Grid">
        <Icons.ViewGridIcon />
      </ImportButton>
      <ImportButton label="View None">
        <Icons.ViewNoneIcon />
      </ImportButton>
      <ImportButton label="Square">
        <Icons.SquareIcon />
      </ImportButton>
      <ImportButton label="Copy">
        <Icons.CopyIcon />
      </ImportButton>
      <ImportButton label="Dash">
        <Icons.DashIcon />
      </ImportButton>
    </Fragment>
  );
};

const Alignment = () => {
  return (
    <Fragment>
      <ImportButton label="Align Top">
        <Icons.AlignTopIcon />
      </ImportButton>
      <ImportButton label="Align Center Vertically ">
        <Icons.AlignCenterVerticallyIcon />
      </ImportButton>
      <ImportButton label="Align Bottom">
        <Icons.AlignBottomIcon />
      </ImportButton>
      <ImportButton label="Stretch Vertically">
        <Icons.StretchVerticallyIcon />
      </ImportButton>
      <ImportButton label="Align Left">
        <Icons.AlignLeftIcon />
      </ImportButton>
      <ImportButton label="Align Center Horizontally ">
        <Icons.AlignCenterHorizontallyIcon />
      </ImportButton>
      <ImportButton label="Align Right">
        <Icons.AlignRightIcon />
      </ImportButton>
      <ImportButton label="Stretch Horizontally">
        <Icons.StretchHorizontallyIcon />
      </ImportButton>
      <ImportButton label="Space Between Horizontally">
        <Icons.SpaceBetweenHorizontallyIcon />
      </ImportButton>
      <ImportButton label="Space Evenly Horizontally">
        <Icons.SpaceEvenlyHorizontallyIcon />
      </ImportButton>
      <ImportButton label="Space Between Vertically">
        <Icons.SpaceBetweenVerticallyIcon />
      </ImportButton>
      <ImportButton label="Space Evenly Vertically">
        <Icons.SpaceEvenlyVerticallyIcon />
      </ImportButton>
      <ImportButton label="Pin Left">
        <Icons.PinLeftIcon />
      </ImportButton>
      <ImportButton label="Pin Right">
        <Icons.PinRightIcon />
      </ImportButton>
      <ImportButton label="Pin Top">
        <Icons.PinTopIcon />
      </ImportButton>
      <ImportButton label="Pin Bottom">
        <Icons.PinBottomIcon />
      </ImportButton>
    </Fragment>
  );
};

const Borders = () => {
  return (
    <Fragment>
      <ImportButton label="Border All">
        <Icons.BorderAllIcon />
      </ImportButton>
      <ImportButton label="Border Split">
        <Icons.BorderSplitIcon />
      </ImportButton>
      <ImportButton label="Border None">
        <Icons.BorderNoneIcon />
      </ImportButton>
      <ImportButton label="Border Left">
        <Icons.BorderLeftIcon />
      </ImportButton>
      <ImportButton label="Border Right">
        <Icons.BorderRightIcon />
      </ImportButton>
      <ImportButton label="Border Top">
        <Icons.BorderTopIcon />
      </ImportButton>
      <ImportButton label="Border Bottom">
        <Icons.BorderBottomIcon />
      </ImportButton>
      <ImportButton label="Corners">
        <Icons.CornersIcon />
      </ImportButton>
      <ImportButton label="Corner Top Left ">
        <Icons.CornerTopLeftIcon />
      </ImportButton>
      <ImportButton label="Corner Top Right ">
        <Icons.CornerTopRightIcon />
      </ImportButton>
      <ImportButton label="Corner Bottom Left ">
        <Icons.CornerBottomLeftIcon />
      </ImportButton>
      <ImportButton label="Corner Bottom Right ">
        <Icons.CornerBottomRightIcon />
      </ImportButton>
      <ImportButton label="Border Style">
        <Icons.BorderStyleIcon />
      </ImportButton>
      <ImportButton label="Border Solid">
        <Icons.BorderSolidIcon />
      </ImportButton>
      <ImportButton label="Border Dashed">
        <Icons.BorderDashedIcon />
      </ImportButton>
      <ImportButton label="Border Dotted">
        <Icons.BorderDottedIcon />
      </ImportButton>
    </Fragment>
  );
};

const Components = () => {
  return (
    <Fragment>
      {/* <Label>Components</Label> */}
      <ImportButton label="Box">
        <Icons.BoxIcon />
      </ImportButton>
      <ImportButton label="Aspect Ratio">
        <Icons.AspectRatioIcon />
      </ImportButton>
      <ImportButton label="Container">
        <Icons.ContainerIcon />
      </ImportButton>
      <ImportButton label="Section">
        <Icons.SectionIcon />
      </ImportButton>
      <ImportButton label="Layout">
        <Icons.LayoutIcon />
      </ImportButton>
      <ImportButton label="Grid">
        <Icons.GridIcon />
      </ImportButton>
      <ImportButton label="Table">
        <Icons.TableIcon />
      </ImportButton>
      <ImportButton label="Image">
        <Icons.ImageIcon />
      </ImportButton>
      <ImportButton label="Switch">
        <Icons.SwitchIcon />
      </ImportButton>
      <ImportButton label="Checkbox">
        <Icons.CheckboxIcon />
      </ImportButton>
      <ImportButton label="Radiobutton">
        <Icons.RadiobuttonIcon />
      </ImportButton>
      <ImportButton label="Avatar">
        <Icons.AvatarIcon />
      </ImportButton>
      <ImportButton label="Button">
        <Icons.ButtonIcon />
      </ImportButton>
      <ImportButton label="Badge">
        <Icons.BadgeIcon />
      </ImportButton>
      <ImportButton label="Input">
        <Icons.InputIcon />
      </ImportButton>
      <ImportButton label="Slider">
        <Icons.SliderIcon />
      </ImportButton>
      <ImportButton label="Quote">
        <Icons.QuoteIcon />
      </ImportButton>
      <ImportButton label="Code">
        <Icons.CodeIcon />
      </ImportButton>
      <ImportButton label="List Bullet">
        <Icons.ListBulletIcon />
      </ImportButton>
      <ImportButton label="Dropdown Menu">
        <Icons.DropdownMenuIcon />
      </ImportButton>
      <ImportButton label="Video">
        <Icons.VideoIcon />
      </ImportButton>
      <ImportButton label="Pie Chart">
        <Icons.PieChartIcon />
      </ImportButton>
      <ImportButton label="Calendar">
        <Icons.CalendarIcon />
      </ImportButton>
      <ImportButton label="Dashboard">
        <Icons.DashboardIcon />
      </ImportButton>
      <ImportButton label="Activity Log">
        <Icons.ActivityLogIcon />
      </ImportButton>
      <ImportButton label="Bar Chart">
        <Icons.BarChartIcon />
      </ImportButton>
      <ImportButton label="Divider Vertical">
        <Icons.DividerVerticalIcon />
      </ImportButton>
      <ImportButton label="Divider Horizontal">
        <Icons.DividerHorizontalIcon />
      </ImportButton>
    </Fragment>
  );
};

const Design = () => {
  return (
    <Fragment>
      <ImportButton label="Frame">
        <Icons.FrameIcon />
      </ImportButton>
      <ImportButton label="Crop">
        <Icons.CropIcon />
      </ImportButton>
      <ImportButton label="Layers">
        <Icons.LayersIcon />
      </ImportButton>
      <ImportButton label="Stack">
        <Icons.StackIcon />
      </ImportButton>
      <ImportButton label="Tokens">
        <Icons.TokensIcon />
      </ImportButton>
      <ImportButton label="Component 1">
        <Icons.Component1Icon />
      </ImportButton>
      <ImportButton label="Component 2">
        <Icons.Component2Icon />
      </ImportButton>
      <ImportButton label="Symbol">
        <Icons.SymbolIcon />
      </ImportButton>
      <ImportButton label="Component Instance">
        <Icons.ComponentInstanceIcon />
      </ImportButton>
      <ImportButton label="Component None">
        <Icons.ComponentNoneIcon />
      </ImportButton>
      <ImportButton label="Component Boolean">
        <Icons.ComponentBooleanIcon />
      </ImportButton>
      <ImportButton label="Component Placeholder">
        <Icons.ComponentPlaceholderIcon />
      </ImportButton>
      <ImportButton label="Opacity">
        <Icons.OpacityIcon />
      </ImportButton>
      <ImportButton label="Blending Mode">
        <Icons.BlendingModeIcon />
      </ImportButton>
      <ImportButton label="Mask On">
        <Icons.MaskOnIcon />
      </ImportButton>
      <ImportButton label="Mask Off">
        <Icons.MaskOffIcon />
      </ImportButton>
      <ImportButton label="Shadow">
        <Icons.ShadowIcon />
      </ImportButton>
      <ImportButton label="Shadow None">
        <Icons.ShadowNoneIcon />
      </ImportButton>
      <ImportButton label="Shadow Inner">
        <Icons.ShadowInnerIcon />
      </ImportButton>
      <ImportButton label="Shadow Outer">
        <Icons.ShadowOuterIcon />
      </ImportButton>
      <ImportButton label="Value">
        <Icons.ValueIcon />
      </ImportButton>
      <ImportButton label="Value None">
        <Icons.ValueNoneIcon />
      </ImportButton>
      <ImportButton label="Zoom In">
        <Icons.ZoomInIcon />
      </ImportButton>
      <ImportButton label="Zoom Out">
        <Icons.ZoomOutIcon />
      </ImportButton>
      <ImportButton label="Transparency Grid">
        <Icons.TransparencyGridIcon />
      </ImportButton>
      <ImportButton label="Group">
        <Icons.GroupIcon />
      </ImportButton>
      <ImportButton label="Dimensions">
        <Icons.DimensionsIcon />
      </ImportButton>
      <ImportButton label="Rotate Counter-Clockwise">
        <Icons.RotateCounterClockwiseIcon />
      </ImportButton>
      <ImportButton label="Columns">
        <Icons.ColumnsIcon />
      </ImportButton>
      <ImportButton label="Rows">
        <Icons.RowsIcon />
      </ImportButton>
      <ImportButton label="Box Model">
        <Icons.BoxModelIcon />
      </ImportButton>
      <ImportButton label="Padding">
        <Icons.PaddingIcon />
      </ImportButton>
      <ImportButton label="Margin">
        <Icons.MarginIcon />
      </ImportButton>
      <ImportButton label="Angle">
        <Icons.AngleIcon />
      </ImportButton>
      <ImportButton label="Cursor Arrow">
        <Icons.CursorArrowIcon />
      </ImportButton>
      <ImportButton label="Cursor Text">
        <Icons.CursorTextIcon />
      </ImportButton>
      <ImportButton label="Column Spacing">
        <Icons.ColumnSpacingIcon />
      </ImportButton>
      <ImportButton label="Row Spacing">
        <Icons.RowSpacingIcon />
      </ImportButton>
    </Fragment>
  );
};

const Logos = () => {
  return (
    <Fragment>
      <ImportButton label="Modulz Logo">
        <Icons.ModulzLogoIcon />
      </ImportButton>
      <ImportButton label="Stitches Logo">
        <Icons.StitchesLogoIcon />
      </ImportButton>
      <ImportButton label="Figma Logo">
        <Icons.FigmaLogoIcon />
      </ImportButton>
      <ImportButton label="Framer Logo">
        <Icons.FramerLogoIcon />
      </ImportButton>
      <ImportButton label="Sketch Logo">
        <Icons.SketchLogoIcon />
      </ImportButton>
      <ImportButton label="Twitter Logo">
        <Icons.TwitterLogoIcon />
      </ImportButton>
      <ImportButton label="IconJar Logo">
        <Icons.IconJarLogoIcon />
      </ImportButton>
      <ImportButton label="GitHub Logo">
        <Icons.GitHubLogoIcon />
      </ImportButton>
      <ImportButton label="Vercel Logo">
        <Icons.VercelLogoIcon />
      </ImportButton>
      <ImportButton label="CodeSandbox Logo">
        <Icons.CodeSandboxLogoIcon />
      </ImportButton>
      <ImportButton label="Notion Logo">
        <Icons.NotionLogoIcon />
      </ImportButton>
    </Fragment>
  );
};

const Music = () => {
  return (
    <Fragment>
      <ImportButton label="Play">
        <Icons.PlayIcon />
      </ImportButton>
      <ImportButton label="Resume">
        <Icons.ResumeIcon />
      </ImportButton>
      <ImportButton label="Pause">
        <Icons.PauseIcon />
      </ImportButton>
      <ImportButton label="Stop">
        <Icons.StopIcon />
      </ImportButton>
      <ImportButton label="Track Previous">
        <Icons.TrackPreviousIcon />
      </ImportButton>
      <ImportButton label="Track Next">
        <Icons.TrackNextIcon />
      </ImportButton>
      <ImportButton label="Loop">
        <Icons.LoopIcon />
      </ImportButton>
      <ImportButton label="Shuffle">
        <Icons.ShuffleIcon />
      </ImportButton>
      <ImportButton label="Speaker Loud">
        <Icons.SpeakerLoudIcon />
      </ImportButton>
      <ImportButton label="Speaker Moderate">
        <Icons.SpeakerModerateIcon />
      </ImportButton>
      <ImportButton label="Speaker Quiet">
        <Icons.SpeakerQuietIcon />
      </ImportButton>
      <ImportButton label="Speaker Off">
        <Icons.SpeakerOffIcon />
      </ImportButton>
    </Fragment>
  );
};

const Objects = () => {
  return (
    <Fragment>
      <ImportButton label="Magnifying Glass">
        <Icons.MagnifyingGlassIcon />
      </ImportButton>
      <ImportButton label="Gear">
        <Icons.GearIcon />
      </ImportButton>
      <ImportButton label="Bell">
        <Icons.BellIcon />
      </ImportButton>
      <ImportButton label="Home">
        <Icons.HomeIcon />
      </ImportButton>
      <ImportButton label="Lock Closed">
        <Icons.LockClosedIcon />
      </ImportButton>
      <ImportButton label="Lock Open 1 ">
        <Icons.LockOpen1Icon />
      </ImportButton>
      <ImportButton label="Lock Open 2 ">
        <Icons.LockOpen2Icon />
      </ImportButton>
      <ImportButton label="Backpack">
        <Icons.BackpackIcon />
      </ImportButton>
      <ImportButton label="Camera">
        <Icons.CameraIcon />
      </ImportButton>
      <ImportButton label="Paper Plane">
        <Icons.PaperPlaneIcon />
      </ImportButton>
      <ImportButton label="Rocket">
        <Icons.RocketIcon />
      </ImportButton>
      <ImportButton label="Envelope Closed">
        <Icons.EnvelopeClosedIcon />
      </ImportButton>
      <ImportButton label="Envelope Open">
        <Icons.EnvelopeOpenIcon />
      </ImportButton>
      <ImportButton label="Chat Bubble">
        <Icons.ChatBubbleIcon />
      </ImportButton>
      <ImportButton label="Link 1">
        <Icons.Link1Icon />
      </ImportButton>
      <ImportButton label="Link None 1 ">
        <Icons.LinkNone1Icon />
      </ImportButton>
      <ImportButton label="Link Break 1 ">
        <Icons.LinkBreak1Icon />
      </ImportButton>
      <ImportButton label="Link 2">
        <Icons.Link2Icon />
      </ImportButton>
      <ImportButton label="Link None 2 ">
        <Icons.LinkNone2Icon />
      </ImportButton>
      <ImportButton label="Link Break 2 ">
        <Icons.LinkBreak2Icon />
      </ImportButton>
      <ImportButton label="Trash">
        <Icons.TrashIcon />
      </ImportButton>
      <ImportButton label="Pencil 1">
        <Icons.Pencil1Icon />
      </ImportButton>
      <ImportButton label="Pencil 2">
        <Icons.Pencil2Icon />
      </ImportButton>
      <ImportButton label="Bookmark">
        <Icons.BookmarkIcon />
      </ImportButton>
      <ImportButton label="Drawing Pin">
        <Icons.DrawingPinIcon />
      </ImportButton>
      <ImportButton label="Drawing Pin Filled ">
        <Icons.DrawingPinFilledIcon />
      </ImportButton>
      <ImportButton label="Sewing Pin">
        <Icons.SewingPinIcon />
      </ImportButton>
      <ImportButton label="Sewing Pin Filled ">
        <Icons.SewingPinFilledIcon />
      </ImportButton>
      <ImportButton label="Cube">
        <Icons.CubeIcon />
      </ImportButton>
      <ImportButton label="Archive">
        <Icons.ArchiveIcon />
      </ImportButton>
      <ImportButton label="Crumpled Paper">
        <Icons.CrumpledPaperIcon />
      </ImportButton>
      <ImportButton label="Mix">
        <Icons.MixIcon />
      </ImportButton>
      <ImportButton label="Mixer Horizontal">
        <Icons.MixerHorizontalIcon />
      </ImportButton>
      <ImportButton label="Mixer Vertical">
        <Icons.MixerVerticalIcon />
      </ImportButton>
      <ImportButton label="File">
        <Icons.FileIcon />
      </ImportButton>
      <ImportButton label="File Text">
        <Icons.FileTextIcon />
      </ImportButton>
      <ImportButton label="File Plus">
        <Icons.FilePlusIcon />
      </ImportButton>
      <ImportButton label="File Minus">
        <Icons.FileMinusIcon />
      </ImportButton>
      <ImportButton label="Reader">
        <Icons.ReaderIcon />
      </ImportButton>
      <ImportButton label="Card Stack">
        <Icons.CardStackIcon />
      </ImportButton>
      <ImportButton label="Card Stack Plus">
        <Icons.CardStackPlusIcon />
      </ImportButton>
      <ImportButton label="Card Stack Minus">
        <Icons.CardStackMinusIcon />
      </ImportButton>
      <ImportButton label="Id Card">
        <Icons.IdCardIcon />
      </ImportButton>
      <ImportButton label="Crosshair 1">
        <Icons.Crosshair1Icon />
      </ImportButton>
      <ImportButton label="Crosshair 2">
        <Icons.Crosshair2Icon />
      </ImportButton>
      <ImportButton label="Target">
        <Icons.TargetIcon />
      </ImportButton>
      <ImportButton label="Disc">
        <Icons.DiscIcon />
      </ImportButton>
      <ImportButton label="Globe">
        <Icons.GlobeIcon />
      </ImportButton>
      <ImportButton label="Sun">
        <Icons.SunIcon />
      </ImportButton>
      <ImportButton label="Moon">
        <Icons.MoonIcon />
      </ImportButton>
      <ImportButton label="Clock">
        <Icons.ClockIcon />
      </ImportButton>
      <ImportButton label="Timer">
        <Icons.TimerIcon />
      </ImportButton>
      <ImportButton label="Counter-Clockwise Clock">
        <Icons.CounterClockwiseClockIcon />
      </ImportButton>
      <ImportButton label="Countdown Timer">
        <Icons.CountdownTimerIcon />
      </ImportButton>
      <ImportButton label="Stopwatch">
        <Icons.StopwatchIcon />
      </ImportButton>
      <ImportButton label="Lap Timer">
        <Icons.LapTimerIcon />
      </ImportButton>
      <ImportButton label="Lightning Bolt">
        <Icons.LightningBoltIcon />
      </ImportButton>
      <ImportButton label="Magic Wand">
        <Icons.MagicWandIcon />
      </ImportButton>
      <ImportButton label="Face">
        <Icons.FaceIcon />
      </ImportButton>
      <ImportButton label="Person">
        <Icons.PersonIcon />
      </ImportButton>
      <ImportButton label="Eye Open">
        <Icons.EyeOpenIcon />
      </ImportButton>
      <ImportButton label="Eye None">
        <Icons.EyeNoneIcon />
      </ImportButton>
      <ImportButton label="Eye Closed">
        <Icons.EyeClosedIcon />
      </ImportButton>
      <ImportButton label="Hand">
        <Icons.HandIcon />
      </ImportButton>
      <ImportButton label="Ruler Horizontal">
        <Icons.RulerHorizontalIcon />
      </ImportButton>
      <ImportButton label="Ruler Square">
        <Icons.RulerSquareIcon />
      </ImportButton>
      <ImportButton label="Clipboard">
        <Icons.ClipboardIcon />
      </ImportButton>
      <ImportButton label="Clipboard Copy">
        <Icons.ClipboardCopyIcon />
      </ImportButton>
      <ImportButton label="Star">
        <Icons.StarIcon />
      </ImportButton>
      <ImportButton label="StarFilled">
        <Icons.StarFilledIcon />
      </ImportButton>
      <ImportButton label="Cookie">
        <Icons.CookieIcon />
      </ImportButton>
    </Fragment>
  );
};

const Typography = () => {
  return (
    <Fragment>
      <ImportButton label="Font Style">
        <Icons.FontStyleIcon />
      </ImportButton>
      <ImportButton label="Font Italic">
        <Icons.FontItalicIcon />
      </ImportButton>
      <ImportButton label="Font Roman">
        <Icons.FontRomanIcon />
      </ImportButton>
      <ImportButton label="Font Bold">
        <Icons.FontBoldIcon />
      </ImportButton>
      <ImportButton label="Letter Case Uppercase ">
        <Icons.LetterCaseUppercaseIcon />
      </ImportButton>
      <ImportButton label="Letter Case Capitalize ">
        <Icons.LetterCaseCapitalizeIcon />
      </ImportButton>
      <ImportButton label="Letter Case Lowercase ">
        <Icons.LetterCaseLowercaseIcon />
      </ImportButton>
      <ImportButton label="Letter Case Toggle ">
        <Icons.LetterCaseToggleIcon />
      </ImportButton>
      <ImportButton label="Letter Spacing">
        <Icons.LetterSpacingIcon />
      </ImportButton>
      <ImportButton label="Align Baseline">
        <Icons.AlignBaselineIcon />
      </ImportButton>
      <ImportButton label="Font Size">
        <Icons.FontSizeIcon />
      </ImportButton>
      <ImportButton label="Font Family">
        <Icons.FontFamilyIcon />
      </ImportButton>
      <ImportButton label="Heading">
        <Icons.HeadingIcon />
      </ImportButton>
      <ImportButton label="Text">
        <Icons.TextIcon />
      </ImportButton>
      <ImportButton label="Text None">
        <Icons.TextNoneIcon />
      </ImportButton>
      <ImportButton label="Line Height">
        <Icons.LineHeightIcon />
      </ImportButton>
      <ImportButton label="Underline">
        <Icons.UnderlineIcon />
      </ImportButton>
      <ImportButton label="Strikethrough">
        <Icons.StrikethroughIcon />
      </ImportButton>
      <ImportButton label="Overline">
        <Icons.OverlineIcon />
      </ImportButton>
      <ImportButton label="Pilcrow">
        <Icons.PilcrowIcon />
      </ImportButton>
      <ImportButton label="Text Align Left ">
        <Icons.TextAlignLeftIcon />
      </ImportButton>
      <ImportButton label="Text Align Center ">
        <Icons.TextAlignCenterIcon />
      </ImportButton>
      <ImportButton label="Text Align Right ">
        <Icons.TextAlignRightIcon />
      </ImportButton>
      <ImportButton label="Text Align Justify ">
        <Icons.TextAlignJustifyIcon />
      </ImportButton>
    </Fragment>
  );
};
