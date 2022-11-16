import React from 'react'


function Home(props) {
  return (
    <>
    <div className="home">
      <div className="container">
        
      <h2>{props.page}</h2>
      <h1>{props.name}</h1>
      <p> A passionate Web Developer </p>

      </div>
    </div>
    

    </>
  )
}
  
Home.defaultProps = {
  name: "Kamlesh Choudhary ",
  page: "Hello, I'm "
}
export default Home;