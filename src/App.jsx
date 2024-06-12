import { BrowserRouter } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import './App.css'
import AppRoutes from './routes/AppRoutes';
import Footer from './Footer'
import NavBar from './routes/NavBar';
import conf from './conf/conf';
import { databases, updateLevel } from './conf/appwrite';

export const userContext = createContext();


function App() {

  const [user, setUser] = useState(null)
  const [time, setTime] = useState(0)

  const getUserData = async (id) =>{
    const data = await databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id)
    return data
  }

  useEffect(() => {
    let intervalId;

    
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        
      }, 1000);
    

    

    return () => clearInterval(intervalId);
  }, []);

  

  useEffect(() => {

    const fetchData = async () => {
      const id = localStorage.getItem('id')
      const data = await getUserData(id)
      setUser(data)
    }

    fetchData()

    updateLevel(localStorage.getItem('id'))
    
  }, [time])
  
  return (
    <userContext.Provider value={user}>
    <BrowserRouter>
      <>
        <NavBar/>
        
        <AppRoutes />
        <Footer/>
      </>
    </BrowserRouter>
    </userContext.Provider>
  )


}

export default App
