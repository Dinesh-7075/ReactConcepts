import React from 'react'

const SetHtml = () => {
    const data = "<h1 style='color:blue'>Welcome...........</h1>";
    const Data2 = () => {
        return <h1>Welcomew...........</h1>;
    }
    console.log(Data2);

    function* generator() { // Generator functions have multiple return statements(yield)
      yield 10;
      yield 20;
    }
  
    const result = generator();
    console.log("yield = " + result.next().value);
    
  return (
    // <div>{data}</div>
    <div dangerouslySetInnerHTML={{__html:data}}>
    {/* <Data2 /> */}
    </div>
  )
}

export default SetHtml