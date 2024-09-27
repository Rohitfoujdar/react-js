import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleloClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = " ";
    setText(newText);
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy=()=>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
  }
  
  const [text, setText] = useState("");

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className='btn.btn-primary mx-2' onClick={handleUpClick}>Convert to upperCase</button>
       <button className='btn.btn-primary mx-2' onClick={handleloClick}>Convert to lowerCase</button>
       <button className='btn.btn-primary mx-2' onClick={handleClick}>Clear</button>
       <button className='btn.btn-primary mx-2' onClick={handleCopy}>Copy</button>
       <button className='btn.btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
     <div className="container my-3">
      <h2>your summary</h2>
      <p>{text.split("").length} words and {text.length}characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
    </>
  )
}



// import React, {useState} from 'react'

// export default function TextForm2(props){
// const handleonclick =()=>{
//  let a= text.toUpperCase();
//  setText(a);
// }

// const handleonchange=(event)=>{
//       setText(event.target.value);

// }
//   const [text, setText] = useState("Enter text here");
//   return(
//     <div>
      
//   <h1>{props.heading}</h1>
//   <div className="mb-3">
//   <textarea className="form-control" value={text} onChange={handleonchange} id="trybox" rows="8"></textarea>
// </div>
// <button className="btn btn-primary" onClick={handleonclick} >Convert to UpperCase</button>
// </div>
//   )
  
// }
