import { useEffect, useState } from 'react';

const Book = (props) => {
   
    const {img, title, author, number} = props
    
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect when the component mounts
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 300); // Small delay before starting fade-in (optional)
      
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);
  
  
   return(
    <article className={`book ${fadeIn ? 'fade-in' : ''}`} >
        <img  src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number"># {number+1}</span>
    </article>
   )
}

export default Book