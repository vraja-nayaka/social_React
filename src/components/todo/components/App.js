import React from 'react'
import HeaderContainer from './header/HeaderContainer'
import MainSectionContainer from './mainSection/MainSectionContainer'
import style from './todo.module.css'

const App = () => (
  <div className={style.todoapp}>
    <HeaderContainer />
    <MainSectionContainer />
  </div>
)

export default App
