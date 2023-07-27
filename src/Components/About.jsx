import React from 'react';

export default function About(props) {
  const textColor = () =>{
    return props.mode==='primary'? "dark":"light";
  }
  const bgColor = () =>{
    return props.mode === "primary"? "info":"dark";
  }
  
  return (
    <>
    <div className={`container my-5 px-4 py-1 `} >
    <h2 className={`my-5 text-${textColor()}`} >About</h2>
    <div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className={`accordion-item bg bg-${bgColor()} text-${textColor()}`}>
    <h2 className={`accordion-header bg bg-${bgColor()} text-${textColor()}`} id="flush-headingOne">
      <button className={`accordion-button collapsed bg bg-${bgColor()} text-${textColor()}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is Your Name?
      </button>
    </h2>
    <div id="flush-collapseOne" className={`accordion-collapse collapse bg bg-${bgColor()}`} aria-labelledby="flush-headingOne"  data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">My name is Usman Ahmed Goraya and I'm a last year computer Science Student.</div>
    </div>
  </div>
  <div className={`accordion-item bg bg-${bgColor()} text-${textColor()}`}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className={`accordion-button collapsed bg bg-${bgColor()} text-${textColor()}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How many exprience you have in web development?
      </button>
    </h2>
    <div id="flush-collapseTwo" className={`accordion-collapse collapse`} aria-labelledby="flush-headingTwo"  data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">I've approxemately 2 years of exprience in the Web Development Field and i am a React Js Developer</div>
    </div>
  </div>
  <div className={`accordion-item bg bg-${bgColor()} text-${textColor()}`}>
    <h2 className={`accordion-header `} id="flush-headingThree" >
      <button className={`accordion-button collapsed bg bg-${bgColor()} text-${textColor()}`}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        In which city are you located?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"  data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">I live in Faislabad city of Punjab Province of Pakistan.</div>
    </div>
  </div>
</div>
</div>
</>
  )
}
