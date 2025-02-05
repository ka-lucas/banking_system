import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { RightSideBar } from '@/components/ui/RightSideBar';

const Home = () => {
  const loggedIn = { firstName: 'Katarine',lastName: 'M',email:'kml@email.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn.firstName || 'Guest'}
            subtext='Acess and manage your account and transactions efficiently'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions

      </div>
    
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance:500.50}]}/>
    </section>
  )
}

export default Home