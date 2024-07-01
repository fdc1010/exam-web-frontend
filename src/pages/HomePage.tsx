import React, { useState } from 'react'
import UsersTable from '../components/User/usersTable'
import { Navbar } from '../components/Navbar/navbar'
import PageTitle from '../components/pageTitle'

const HomePage:React.FC = () => {
  const [activeItem, setActiveItem] = useState('Welcome')
  console.log(activeItem, "activeItem")

  return (
    <div>
      <Navbar setActiveItem={setActiveItem}/>
      <div className='w-full md:px-[7.4rem] px-4 overflow-y-auto flex flex-col justify-center mt-8'>
      <PageTitle text={activeItem}/>
      <UsersTable/>
      </div>
    </div>
  )
}

export default HomePage