import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'



import { userContext } from '../App'

import './NavBar.css'


function NavBar() {

  const logout = () => {
    localStorage.clear()
    window.location = "/";
}



const user = useContext(userContext)



    
  

    

   

    



  if(localStorage.getItem("login") == 'logged in'){
    return (
      
      <header className={'navb'}>

        
          <NavLink style={{textDecoration:'none', color:"white"}} to={"/"}>
            <img className={'nav-img'} src="./src/img/memobrain_logo.jpg" alt="memobrain-logo" />
          </NavLink>
        
        <button className={'nav-button'}>
          <NavLink style={{textDecoration:'none', color:"white"}} to={"/learn"}>
            Learn
          </NavLink>
          </button>

          <div className={'lives-coins'}>
          <img src="https://www.svgrepo.com/show/299502/heart.svg" alt="lives-logo" />
          {user ? (
          <>
          <p>{user.lives}</p>
          </>
          ) : (
          <h1>...</h1>)}
          </div>
          
          <div className={'lives-coins'}>
          <img src="https://www.svgrepo.com/show/68815/coin.svg" alt="coins-logo" />
          {user ? (
          <>
          <p>{user.coins}</p>
          </>
          ) : (
          <h1>...</h1>)}
          </div>


          



        <button className={'nav-button-ranking'}>
          <NavLink style={{textDecoration:'none', color:"white"}} to={"/ranking"}>
            Ranking
          </NavLink>
        </button>

        <button className={'nav-button-right'}>
          <NavLink style={{textDecoration:'none', color:"white"}} to={"/shop"}>
            Shop
          </NavLink>
        </button>

        
        <button className={'nav-button-right'}>
          <NavLink onClick={logout} style={{textDecoration:'none', color:"white"}}>
            Log out
          </NavLink>
        </button>
        

        <button className={'nav-button'}>
          <NavLink style={{textDecoration:'none', color:"white"}} to={"/profile"}>
            Profile
          </NavLink>
        </button>



    </header>

    )
  }

    

}

export default NavBar