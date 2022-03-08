import React from 'react'
import Account from './components/Account'

function App() {
  return (
    <div className='container'>
      <Account name={"現金 Cash"} />
      <Account name={"悠遊卡 Card"} />
      <Account name={"大祕寶 Coin"} />
      <Account name={"郵局帳戶 Post Account"} />
      <Account name={"台新帳戶 Richart"} />
    </div>
    )
}

export default App;
