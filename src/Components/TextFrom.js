import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUpclick = () => {
        console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert(" Convert to UpperCase","success")
        

    }
    const handleonchange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    // const handleonchange1 = (event) => {
    //     console.log("On change")
    //     setText(event.target.value)
    // }
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

        let newtext = "";
        setText(newtext);
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




    const [text, setText] = useState("Enter the Text ");
    // const [TEXT,SetText] =useState("enter the text");



    // text ="change text is wrong "
    // setText("chage the states ");
    return (

        < >

            <div className="container" style={{color:props.mode === 'dark'?'white' :'black'}}>
            <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white' :'black' }} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleUpclick1}>Convert to Uppercase</button>
                  <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick1}>Text Clear</button>
                  <button className="btn btn-primary my-3 mx-3" onClick={handleReverseClick1}>Reverse</button>
                  
                  <button className="btn btn-primary my-3 mx-3" onClick={handlecopy}>Copy Text</button>

              
            </div>
            {/* <div className='mb-4'>
             <textarea className="form-control" value={TEXT} onChange={handleonchange1} id="mybox" rows="8"></textarea>
             <button className="btn btn-primary my-3" onClick={handleUpclick1}>Convert to Lowercase</button>
        </div> */}




            <div className="container" style={{color:props.mode === 'dark'?'white' :'black'}}>
                <h2>Your text Summery</h2>
                <p>{text.trim().split(" ").length} Words and {text.length} Character</p>
                <p>{0.08 *text.trim().split(" ").length}Minutes To reads</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ?text:"Enter SomeThing in the Textbox above to preview it here "}</p>
            </div>

        </>


    )
}
