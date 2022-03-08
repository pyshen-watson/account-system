import React from 'react'
import Account from './components/Account'

function App() {
  return (
    <div className='container'>
      <Account name={"Cash"} />
      <Account name={"Card"} />
      <Account name={"Coin"} />
      <Account name={"Post Account"} />
      <Account name={"Richart"} />
    </div>
    )
}

export default App;
