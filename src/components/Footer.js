// import React,{ useEffect, useRef } from "react"
// import gsap from "gsap"

// const Footer = ()=>{
  

//   const phoneRef = useRef(null)
//   useEffect(()=>{
//     const timeLine  = gsap.timeline({
//       scrollTrigger : {
//         trigger : phoneRef.current,
//         start :  "top center",
//         scrub : true
//       }
//     })
//     timeLine.to('.hero-container',{
//       backgroundColor : 'white',
//       duration : 0.5
//     },"-=2")
//   },[])
//     return(
//         <div ref={phoneRef} className='hero-text-section'>
//           <h1>Visual stories that feel like yours, because they are.</h1>
//         </div>
        
//     )
// }

// export default Footer


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroFooter = ()=> {
  const phoneRef = useRef(null);

  

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      ".hero-container",
      {
        backgroundColor: "white", // camelCase
        duration: 0.25, // seconds
      },
      "-=2"
    );
  }, []);
  return (
    <div ref={phoneRef} className="hero-text-section">
      <h1>Visual stories that feel like yours, because they are.</h1>
    </div>
  );
}

export default HeroFooter