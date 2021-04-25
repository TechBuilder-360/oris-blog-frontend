import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import {
  btn,
  blockTypeButtons,
  headers,
  PluginsBtn,
  BlockButton,
  TextButton,
  styleMap,
} from "../Settings";
import Immutable from 'immutable';
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  convertToRaw,
} from "draft-js";
import {
  Image,
  ProgressBar,
  Button
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import classes from "./EditorContainer.module.css";
import { add_text } from "../../../store/actions/blogAction";
import { Col} from "react-bootstrap";

const EditorContainer = (props) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(null);
  const [variant, setVariant] = useState("");


function clearAll(){
  setEditorState(EditorState.createEmpty())
  props.clearBox()
}

  function getBlockClassName(name) {
    return `richText-block richText-${name}-block`;
}


   function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();

    const blockAlignment =
        contentBlock.getData() && contentBlock.getData().get('text-align');

    if (blockAlignment) {
        return `${getBlockClassName(blockAlignment)} richText-textAlignment-block`;
    }

    if (type === 'unstyled') {
        return getBlockClassName('unstyled');
    }

    return null;
}
   function getSelectedBlocksMap(editorState: EditorState): OrderedMap {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const startKey = selectionState.getStartKey();
    const endKey = selectionState.getEndKey();
    const blockMap = contentState.getBlockMap();
    return blockMap
        .toSeq()
        .skipUntil((_, k) => k === startKey)
        .takeUntil((_, k) => k === endKey)
        .concat([[endKey, blockMap.get(endKey)]]);
}


 function getSelectedBlocksList(editorState: EditorState): List {
    return getSelectedBlocksMap(editorState).toList();
}

   function getSelectedBlocksMetadata(editorState: EditorState): Map {
    let metaData = new Immutable.Map({});
    const selectedBlocks = getSelectedBlocksList(editorState);
    if (selectedBlocks && selectedBlocks.size > 0) {
        for (let i = 0; i < selectedBlocks.size; i += 1) {
            const data = selectedBlocks.get(i).getData();
            if (!data || data.size === 0) {
                metaData = metaData.clear();
                break;
            }
            if (i === 0) {
                metaData = data;
            } else {
                metaData.forEach((value, key) => {
                    // eslint-disable-line no-loop-func
                    if (!data.get(key) || data.get(key) !== value) {
                        metaData = metaData.delete(key);
                    }
                });
                if (metaData.size === 0) {
                    metaData = metaData.clear();
                    break;
                }
            }
        }
    }
    return metaData;
}

function setBlockData(editorState, data) {
    const newContentState = Modifier.setBlockData(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        data
    );

    return EditorState.push(editorState, newContentState, 'change-block-data');
}

  function getNextAlignment(currentAlignment) {
    switch (currentAlignment) {
        case 'right':
            return 'left';
        case 'left':
            return 'center';
        case 'center':
            return 'right';

        default:
            return 'left';
    }
}

 function TextAlignmentControl({ editorState, onToggle, styles }) {
    return (
        <div
            
            onMouseDown={e => {
                e.preventDefault();
                onToggle(
                    setBlockData(editorState, {
                        'text-align': getNextAlignment(
                            getSelectedBlocksMetadata(editorState).get(
                                'text-align'
                            )
                        )
                    })
                );
            }}
        >
            Align
        </div>
    );
}
  
  const handleKeyCommand = (command) => {
    let editorStat = null
    if (!editorState && command === "highlight") {
      editorStat = RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT");
    }
    editorStat = RichUtils.handleKeyCommand(editorState, command);
    if (editorStat) {
      setEditorState(editorStat);
      return "handled";
    }

    return "not-handled";
  };

  function toggleBlockType(event) {
    event.preventDefault();

    let block = event.currentTarget.getAttribute("data-block");

    setEditorState(RichUtils.toggleBlockType(editorState, block));
  }
  function toggleInlineStyle(event) {
    event.preventDefault();
    let style = event.currentTarget.getAttribute("data-style");

    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }
  const MAX_LENGTH = 1000;
  
  const handleChange = (editorState) => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = _getLengthOfSelectedText();
    setProgress(currentContentLength - selectedTextLength);
   
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
  const mappedBlocks = blocks.map(
    (block) => (!block.text.trim() && "\n") || block.text
  );
  let newText = "";
  for (let i = 0; i < mappedBlocks.length; i++) {
    const block = mappedBlocks[i];

    // handle last block
    if (i === mappedBlocks.length - 1) {
      newText += block;
    } else {
      // otherwise we join with \n, except if the block is already a \n
      if (block === "\n") newText += block;
      else newText += block + "\n";
    }
  }

  setEditorState(editorState);
   
    if (
      progress >= MAX_LENGTH * (90 / 100) ||
      progress === MAX_LENGTH * (99 / 100)
    ) {
      setVariant("warning");
      setText(newText);
      dispatch(add_text(text));
      
    }
    if (progress < MAX_LENGTH * (90 / 100)) {
      setVariant("secondary");
      setText(newText);
      dispatch(add_text(text));
    }


    
    
  };

  const _getLengthOfSelectedText = () =>{
    const currentSelection = editorState.getSelection();
    const isCollapsed = currentSelection.isCollapsed();

    let length = 0;

    if (!isCollapsed) {
      const currentContent = editorState.getCurrentContent();
      const startKey = currentSelection.getStartKey();
      const endKey = currentSelection.getEndKey();
      const startBlock = currentContent.getBlockForKey(startKey);
      const isStartAndEndBlockAreTheSame = startKey === endKey;
      const startBlockTextLength = startBlock.getLength();
      const startSelectedTextLength =
        startBlockTextLength - currentSelection.getStartOffset();
      const endSelectedTextLength = currentSelection.getEndOffset();
      const keyAfterEnd = currentContent.getKeyAfter(endKey);
      console.log(startKey);
      if (isStartAndEndBlockAreTheSame) {
        length +=
          currentSelection.getEndOffset() - currentSelection.getStartOffset();
      } else {
        let currentKey = startKey;

        while (currentKey && currentKey !== keyAfterEnd) {
          if (currentKey === startKey) {
            length += startSelectedTextLength + 1;
          } else if (currentKey === endKey) {
            length += endSelectedTextLength;
          } else {
            length += currentContent.getBlockForKey(currentKey).getLength() + 1;
          }

          currentKey = currentContent.getKeyAfter(currentKey);
        }
      }
    }

    return length;
  };

  const _handleBeforeInput = () => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = _getLengthOfSelectedText();
    setProgress(currentContentLength - selectedTextLength);
    if (currentContentLength - selectedTextLength > MAX_LENGTH - 1) {
      setVariant("danger");
      

      return "handled";
    }
  };

  const _handlePastedText = (pastedText) => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = _getLengthOfSelectedText();

    if (
      currentContentLength + pastedText.length - selectedTextLength >
      MAX_LENGTH
    ) {
      setVariant("danger");
      
      return "handled";
    }
  };

   

  return (
    <Col>
      <br />
      <div className={classes.btnGroup}>
        <div className={classes.toolbar}>
          {btn.map((button) => {
            return PluginsBtn(
              button.value,
              button.style,
              button.icon,
              editorState,
              toggleInlineStyle
            );
          })}

          {headers.map((button) => {
            return TextButton(
              button.value,
              button.block,
              RichUtils,
              toggleBlockType,
              editorState
            );
          })}

          {blockTypeButtons.map((button) => {
            return BlockButton(
              button.value,
              button.block,
              button.icon,
              RichUtils,
              toggleBlockType,
              editorState
            );
          })}

          <Button variant="secondary" onClick={clearAll} >
              Clear
            </Button>  
 
        </div>
      </div>
      <div className={classes.editor}>
        <Editor
          customStyleMap={styleMap}
          placeholder={"Start typing!"}
          editorState={editorState}
          handleBeforeInput={_handleBeforeInput}
          handlePastedText={_handlePastedText}
          handleKeyCommand={handleKeyCommand}
          onChange={handleChange}
        />
         <ProgressBar
          className={classes.progress}
          variant={variant}
          now={progress}
          min={0}
          max={MAX_LENGTH}
        />
        {props.isFile?
<Image 
src={props.file}  
width={120}
 height={120} 
className={classes.image}/>
:null
}

      </div>
    </Col>
  );
};

export default EditorContainer;
