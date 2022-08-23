import React from 'react'

const Home = () => {

    // calling the endpoint
    const data = async (ext) => {
        const response = await fetch("http://localhost:5000/module/getdbdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ symbol: ext }),
        });
        return response;
    }
    console.log(data);
  return (
    <div className='container'>
      Home Graph
    </div>
  )
}

export default Home
