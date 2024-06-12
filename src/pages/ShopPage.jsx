import { useContext, useState } from "react";
import "./ShopPage.css";
import { userContext } from "../App";
import { updateCoins, updateLives } from "../conf/appwrite";

function ShopPage() {

    const [confirm, setConfirm] = useState(false)
    const [confirm1, setConfirm1] = useState(false)
    const [confirm2, setConfirm2] = useState(false)
    const [confirm3, setConfirm3] = useState(false)
    const [price, setPrice] = useState(0)
    const [lives, setLives] = useState(0)
    const user = useContext(userContext)





  return (
    <>
      <img className="memobrain1"></img>
      <h1 className="tittleshop">SHOP</h1>

     
        <div className="shop-content">
          <div className="shop-item">
            <div className="lives">
              <h1>15 LIVES</h1>
              <img src="https://www.svgrepo.com/show/299502/heart.svg" alt="" />
            </div>
            <button onClick={confirm ? () => {
                if(user && user.coins >= price){
                updateLives(localStorage.getItem('id'), lives)
                updateCoins(localStorage.getItem('id'), -price)
                setTimeout(() => {
                    alert("You have successfully purchased " + lives + " lives, wait a bit for them to be reflected in your account!")
                }, 1000);
                setLives(0)
                setPrice(0)
                } else (alert("You don't have enough memocoins to buy that!"))
                setConfirm(false)
            } : () => {
                setConfirm(true)
                setLives(15)
                setPrice(30)
            }} className="buy-btn">{confirm ? 'SURE?' : 'BUY'}</button>
            <div className="coins">
              <img src="https://www.svgrepo.com/show/68815/coin.svg" alt="" />
              <h1>30 MEMOCOINS</h1>
            </div>
          </div>

          <div className="shop-item">
            <div className="lives">
              <h1>30 LIVES</h1>
              <img src="https://www.svgrepo.com/show/299502/heart.svg" alt="" />
            </div>
            <button onClick={confirm1 ? () => {
                if(user && user.coins >= price){
                updateLives(localStorage.getItem('id'), lives)
                updateCoins(localStorage.getItem('id'), -price)
                setTimeout(() => {
                    alert("You have successfully purchased " + lives + " lives, wait a bit for them to be reflected in your account!")
                }, 1000);
                setLives(0)
                setPrice(0)
                } else (alert("You don't have enough memocoins to buy that!"))
                setConfirm1(false)
            } : () => {
                setConfirm1(true)
                setLives(30)
                setPrice(50)
            }} className="buy-btn">{confirm1 ? 'SURE?' : 'BUY'}</button> 
            <div className="coins">
              <img src="https://www.svgrepo.com/show/68815/coin.svg" alt="" />
              <h1>50 MEMOCOINS</h1>
            </div>
          </div>
          <div className="shop-item">
            <div className="lives">
              <h1>50 LIVES</h1>
              <img src="https://www.svgrepo.com/show/299502/heart.svg" alt="" />
            </div>
            <button onClick={confirm2 ? () => {
                if(user && user.coins >= price){
                updateLives(localStorage.getItem('id'), lives)
                updateCoins(localStorage.getItem('id'), -price)
                setTimeout(() => {
                    alert("You have successfully purchased " + lives + " lives, wait a bit for them to be reflected in your account!")
                }, 1000);
                setLives(0)
                setPrice(0)
                } else (alert("You don't have enough memocoins to buy that!"))
                setConfirm2(false)
            } : () => {
                setConfirm2(true)
                setLives(50)
                setPrice(80)
            }} className="buy-btn">{confirm2 ? 'SURE?' : 'BUY'}</button>            <div className="coins">
              <img src="https://www.svgrepo.com/show/68815/coin.svg" alt="" />
              <h1>80 MEMOCOINS</h1>
            </div>
          </div>
          <div className="shop-item">
            <div className="lives">
              <h1>100 LIVES</h1>
              <img src="https://www.svgrepo.com/show/299502/heart.svg" alt="" />
            </div>
            <button onClick={confirm3 ? () => {
                if(user && user.coins >= price){
                updateLives(localStorage.getItem('id'), lives)
                updateCoins(localStorage.getItem('id'), -price)
                setTimeout(() => {
                    alert("You have successfully purchased " + lives + " lives, wait a bit for them to be reflected in your account!")
                }, 1000);
                setLives(0)
                setPrice(0)
                } else (alert("You don't have enough memocoins to buy that!"))
                setConfirm3(false)
            } : () => {
                setConfirm3(true)
                setLives(100)
                setPrice(125)
            }} className="buy-btn">{confirm3 ? 'SURE?' : 'BUY'}</button>            <div className="coins">
              <img src="https://www.svgrepo.com/show/68815/coin.svg" alt="" />
              <h1>125 MEMOCOINS</h1>
            </div>
          </div>
        </div>

    </>
  );

}


export default ShopPage;
