import {
  faCode,
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faListOl,
  faListUl,
  faWindowMinimize,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export const TextButton = (value, block, ts, Type, state) => {
  const currentBlockType = ts.getCurrentBlockType(state);
  let className = "";
  if (currentBlockType === block) {
    className = "change";
  }
  return (
    <button
      type="button"
      key={block}
      className={className}
      value={value}
      data-block={block}
      onMouseDown={Type}
    >
      {value}
    </button>
  );
};

export const BlockButton = (value, block, icon, ts, Type, state) => {
  const currentBlockType = ts.getCurrentBlockType(state);
  let className = "";
  if (currentBlockType === block) {
    className = "change";
  }
  return (
    <button
      type="button"
      key={block}
      className={className}
      value={value}
      data-block={block}
      onMouseDown={Type}
    >
      {<Icon size="1x" icon={icon} />}
    </button>
  );
};

export const PluginsBtn = (value, style, icon, editorState, Style) => {
  const currentInlineStyle = editorState.getCurrentInlineStyle();
  let className = "";
  if (currentInlineStyle.has(style)) {
    className = "change";
  }

  return (
    <button
      type="button"
      key={style}
      value={value}
      className={className}
      data-style={style}
      onMouseDown={Style}
    >
      <Icon size="1x" icon={icon} />{" "}
    </button>
  );
};

export const headers = [
  {
    value: "h1",
    block: "header-one",
  },

  {
    value: "h2",
    block: "header-two",
  },

  {
    value: "h3",
    block: "header-three",
  },
  {
    value: "h4",
    block: "header-four",
  },
  {
    value: "h5",
    block: "header-five",
  },
  {
    value: "h6",
    block: "header-six",
  },

  {
    value: "h7",
    block: "header-seven",
  },
];

export const blockTypeButtons = [
  {
    value: "<Code>",
    block: "code-block",
    icon: faCode,
  },

  {
    value: "Unordered List",
    block: "unordered-list-item",
    icon: faListUl,
  },

  {
    value: "Ordered List",
    block: "ordered-list-item",
    icon: faListOl,
  },
];
export const btn = [
  {
    value: "B",
    style: "BOLD",
    icon: faBold,
  },

  {
    value: "I",
    style: "ITALIC",
    icon: faItalic,
  },

  {
    value: "U",
    style: "UNDERLINE",
    icon: faUnderline,
  },

  {
    value: "Strikethrough",
    style: "STRIKETHROUGH",
    icon: faStrikethrough,
  },
  {
    value: "highlight",
    style: "HIGHLIGHT",
    icon: faWindowMinimize,
  },
];

export const styleMap = {
  HIGHLIGHT:{
    backgroundColor: "black",
    color: "white",
  },
};
