import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert(" Convert to UpperCase","success")
    }

    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const handleUpclick1 = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert(" Convert to LowerCase","success")
    }

    const handlecopy= ()=>{
        const text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert(" Copy Text","success")
    }

    const handleClearClick1 = () => {
        setText("");
        props.showalert("Clear all text ","success")
    }

    const handleReverseClick1 = () => {
        let newtext = "";
        for(let i=text.length-1;i>=0;i--){
            newtext +=text[i]
        }
        setText(newtext);
        props.showalert("Reverse Text","success")
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white' :'black'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white' :'black' }} id="mybox" rows="8"></textarea>
                <button  disabled={text.length===0}className="btn btn-primary my-3" onClick={handleUpclick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpclick1}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick1}>Text Clear</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleReverseClick1}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handlecopy}>Copy Text</button>
            </div>

            <div className="container" style={{color:props.mode === 'dark'?'white' :'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.trim().split(/\s+/).filter((element)=>{return element.length !=0}).length} Words and {text.length} Characters</p>
                <p>{0.08 * text.trim().split(" ").filter((element)=>{return element.length !=0}).length} Minutes To read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in the Textbox above to preview it here"}</p>
            </div>
        </>
    )
}
