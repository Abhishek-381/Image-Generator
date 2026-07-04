import React, { useRef, useState } from 'react'
import default_img from '../Assets/Default_image.svg'
import './ImageGenerator.css'

function ImageGenerator() {

    const   [image_url,setImage_url] = useState("/");
    let inputRef= useRef(null);

    const imageGenerator = async () => {
  if (inputRef.current.value === "") return;

  const prompt = inputRef.current.value;

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

  setImage_url(imageUrl);
};
    

  return (
    <div className='AIimage'>   
    <div className="header">AI Image <span>Generator</span></div>
    <div className="img-loading">
        <div className="image"><img src={image_url==="/"?default_img:image_url} alt='Not fixed'></img></div>
    </div>
<br></br>

    <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe your image to generate'    onKeyDown={(e) => {
    if (e.key === "Enter") {
      imageGenerator();
    }
  }}/>
  
        <br></br>
        <div className="generate-button" onClick={()=>{imageGenerator()}} >Generate
        </div> 
    </div>
    </div>

  )
}

export default ImageGenerator
