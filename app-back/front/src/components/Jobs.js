import React, {useState, useEffect, getInitialState} from 'react';
import Job from "./Job";

export const Jobs = () => {
  const [state, setState] = useState([]);
  useEffect(() => 
  {
    const url = "/offers";  
    fetch(url)
      .then(res => {  
        return res.json();
      }).then(offers => {
        setState({ offers })
      });
  },[])

    return (
      <div>
        {state.offers? state.offers.map((e, i) =><Job key={i} offer={e} />):<p></p>}
      </div>
    );
}

export default Jobs;