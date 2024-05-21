import React ,{useState}from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        // console.log("Uppercase was Clicked" + text)
        // setText("You have just clicked")
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      // console.log("Uppercase was Clicked" + text)
      props.showAlert("Converted to LowerCase!","success")

      // setText("You have just clicked")
  }
    const handleOnChange=(event)=>{
    //   console.log("OnChange");
      setText(event.target.value);
    }
    // setText("KKKK");
  return (
    <>
    <div>
  <div className="form-group">
    <label for="exampleFormControlInput1">{props.heading}</label>
    <input type="email" className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode==='dark'?'grey':'white'}} id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
  <button type="submit" className="btn btn-primary" onClick={handleLoClick}>Convert To Lower Case</button>

    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length } Minutes read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
