import React,{useState} from 'react'
import 'draft-js/dist/Draft.css';
import { btn,blockTypeButtons,headers,PluginsBtn,BlockButton,TextButton,styleMap

} from '../Settings'
import Icon from '../Icon'
import {Editor, EditorState,RichUtils,getDefaultKeyBinding, KeyBindingUtil,convertToRaw  } from 'draft-js';
import {Tooltip,Row,Col,Form,Button,Image, ProgressBar} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import classes from './EditorContainer.module.css'
import {add_text} from '../../../store/actions/blogAction'



const EditorContainer=(props)=>{
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const dispatch=useDispatch()
  const [text,setText]=useState('')
  const [progress,setProgress]=useState(null)
  const [variant,setVariant]=useState('')
  
  const  handleKeyCommand=(command)=> {
    if (!editorState && command === 'highlight') {
  editorStat = RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT');
}
    const editorStat = RichUtils.handleKeyCommand(editorState, command);
    if (editorStat) {
      setEditorState(editorStat)
      return 'handled';
    }

    return 'not-handled';
  }   

function toggleBlockType (event){
    event.preventDefault();

    let block = event.currentTarget.getAttribute('data-block');
    
      setEditorState(RichUtils.toggleBlockType(editorState, block)
    )
  }
function toggleInlineStyle(event) {
    event.preventDefault();
    let style = event.currentTarget.getAttribute('data-style');
    
      setEditorState(
RichUtils.toggleInlineStyle(editorState, style)

      ) 
  }
  const MAX_LENGTH = 10;

  const handleChange = (editorState) => {
    const currentContent =editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('').length;
    const selectedTextLength = _getLengthOfSelectedText();
    setProgress(currentContentLength - selectedTextLength)
  console.log(progress)
  if((progress >=MAX_LENGTH*(90/100)) || (progress == MAX_LENGTH*(99/100) )){
    setVariant("warning")
  }
  if(progress < MAX_LENGTH*(90/100)){
    setVariant("secondary")
  }
  
  
  
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const mappedBlocks = blocks.map(
      block => (!block.text.trim() && "\n") || block.text
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
    setEditorState(
     editorState
    );
    setText(newText)
    dispatch(add_text(text))
  
  }
   
  
  const _getLengthOfSelectedText = () => {
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
      const startSelectedTextLength = startBlockTextLength - currentSelection.getStartOffset();
      const endSelectedTextLength = currentSelection.getEndOffset();
      const keyAfterEnd = currentContent.getKeyAfter(endKey);
      console.log(currentSelection)
      if (isStartAndEndBlockAreTheSame) {
        length += currentSelection.getEndOffset() - currentSelection.getStartOffset();
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
        };
      }
    }
  
    return length;
  }
  
  const _handleBeforeInput = () => {
    const currentContent =editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('').length;
    const selectedTextLength = _getLengthOfSelectedText();
  setProgress(currentContentLength - selectedTextLength)
    if (currentContentLength - selectedTextLength > MAX_LENGTH - 1) {
      setVariant("danger")
      console.log('you can type max ten characters');
  
      return 'handled';
    }
  }
  
  const _handlePastedText = (pastedText) => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('').length;
    const selectedTextLength = _getLengthOfSelectedText();
  
    if (currentContentLength + pastedText.length - selectedTextLength > MAX_LENGTH) {
      setVariant("danger")
      console.log('you can type max ten characters');
  
      return 'handled';
    }
  }

const keyBindingFunction=(event)=> {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '7') {
    return 'ordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '8') {
    return 'unordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '9') {
    return 'blockquote';
  }
if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'h') {
  return 'highlight';
}
  return getDefaultKeyBinding(event);
}





  return(
<Col>
                                         
                                         <br/>
                                         <div className={classes.btnGroup}>
                                         <div className={classes.toolbar}>
                                           
                                        
   {btn.map((button) => {
     return PluginsBtn(button.value, button.style,button.icon,editorState,toggleInlineStyle);
   })}
       

   {headers.map((button) => {
     return TextButton(button.value, button.block,RichUtils,toggleBlockType,editorState)
   })}
 

   {blockTypeButtons.map((button) => {
     return BlockButton(button.value, button.block,button.icon,RichUtils,toggleBlockType,editorState);
   })}
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
                 onChange={handleChange} />
                 <ProgressBar className={classes.progress} variant={variant} now={progress} min={0} max={MAX_LENGTH}/>
                            </div>     
                </Col>
  )
}

export default EditorContainer