import React from 'react';

function Food({fav}){
  return(
    <div>
      I like {fav}!
    </div>
  )
}

function App() {
  return (
    <div>
      Hello!
      <Food fav = "abcd"/>
    </div>
  );
}

export default App;
