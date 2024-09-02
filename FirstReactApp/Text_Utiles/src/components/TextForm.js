import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick =()=>{
        let newText=" ";
        setText(newText)
    }
    
    
    

    const hnadleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy =()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const [text,setText]=useState('') //Enter text here
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
        
            <textarea className="form-control" value={text} onChange={hnadleOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Lower To UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Upper To LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Exta Spaces</button>

            

    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length } Minutes to READ</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
        
    </div>
    </>
    
  )
}
