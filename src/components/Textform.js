// import { useState } from "react"
import React, {useState} from 'react'

export default function Textform(props) {
    const handelupclick = ()=>{
            // console.log("Uppercase was clicked" + text)
            let newtext = text.toUpperCase();
            settext(newtext);
            props.showAlert("Converted to uppercase","success");
            
    }
    const handeldownclick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to Lowercase","success");

        
    }
    const handelCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");

    }
    const handelextraspace =()=>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showAlert("Extra spaces has been removed","success");

    }
    const handelreverseclick = ()=>{
        let newtext = text;
        let change = newtext;
        let ans = "";
        for(let i=change.length-1;i>=0;i--){
            ans+=change.charAt(i);
        }
        newtext = ans;
        settext(newtext);
        props.showAlert("Text has been reversed","success");

    }


    const handelzigzagclick = ()=>{
        let newtext = text;
        let ans = "";
        for(let i=0;i<newtext.length;i++){
            if(i%2===0){
                ans+=newtext.charAt(i).toUpperCase();
            }
            else{
                ans+=newtext.charAt(i).toLowerCase();
            }
        }
        newtext = ans;
        settext(newtext);
        props.showAlert("Text has been zigzaged","success");

    }
    const handelonchange=(event)=>{
        // console.log("onchange was clicked")
        settext(event.target.value)
        
}
    

    const [text, settext] = useState("");
    // text = "new text"; //Wrong way to change state
    // settext("new text") //correct way to change state
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" value={text.length>0?text:""} onChange={handelonchange} rows="8" style={{backgroundColor:props.mode === "dark"?'#0d1c3c':"white",color:props.mode === 'dark'?'white':'black'}}></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={handelupclick}>Convert to UpperCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handeldownclick}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handelzigzagclick}>Convert to ZigZag</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handelreverseclick}>Convert to Reverse</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handelCopy}>Copy text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handelextraspace}>Remove extra space</button>
                    {/* <button className="btn btn-primary my-3 mx-2" onClick={handelpalclick}>Check palindrome</button> */}

                </div>

                <div className="container my-3 text-${props.mode} style={{color:props.mode === 'dark'?'white':'black'}}">
                    <h2>Text Summery</h2>
                    <p>your text has {text.split(" ").length}  words and {text.length} character</p>
                    <p>your will require {0.008 * text.split(" ").length} </p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"enter something in the textbox above"}</p>
                </div>


        </div>
        </>
    )
}
