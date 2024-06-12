import { useState, useEffect, useContext} from 'react'
import { databases } from '../conf/appwrite'
import conf from '../conf/conf'
import {userContext} from '../App'
import  "./ProfilePage.css"


function ProfilePage() {

  const [userData, setUserData] = useState(null)
  const [upScore, setUpScore] = useState(null)
  const user = useContext(userContext)


  const [disableFeedback, setDisableFeedback] = useState(
    localStorage.getItem('Feedback') === 'false' // Get initial state from localStorage
  );


    const getUserData = async (id) =>{
      const data = await databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id)
      return data
    }

    useEffect(() => {


      const fetchData = async () => {
        const id = localStorage.getItem('id')
        const data = await getUserData(id)
        setUserData(data)
        switch (data.level) {
          case 0:
            setUpScore(3000)
            break;
          case 1:
            setUpScore(9000);
            break;
          case 2:
            setUpScore(15000);
            break;
          case 3:
            setUpScore(20000);
            break;
          case 4:
            setUpScore(30000);
            break;
          case 5:
            setUpScore(45000);
            break;
          case 6:
            setUpScore(60000);
            break;
          case 7:
            setUpScore(100000);
            break;
          case 8:
            setUpScore(150000);
            break;
          case 9:
            setUpScore(210000);
            break;
          case 10:
            setUpScore(300000);
            break;
          
          default:
            break;
        }
      }

      

      fetchData()

      window.addEventListener('storage', handleStorageChange); // Efficient event listener

    return () => {
      window.removeEventListener('storage', handleStorageChange); // Remove listener on cleanup
    };


    }, [disableFeedback])

    const handleStorageChange = (event) => {
      if (event.storageArea === localStorage && event.key === 'id') {
        // Reload data if ID changes in localStorage (prevents stale data)
        fetchData();
      }
    };
  
    const handleDisableFeedbackChange = () => {
      setDisableFeedback(!disableFeedback);
      localStorage.setItem('Feedback', disableFeedback.toString()); // Store boolean as string
    };
    

  <div>
  <img className="img_brain" src="../src/img/brain.jpg"></img>
  </div>


  return (
    <div className='principal-div'>
    <div className='profile-container'>
      <section>
    {user && userData ? (
      <>
      <h1>{user.user}'s PROFILE.</h1>
      <h2>LEVEL: {user.level}</h2>
      <h2>TOTAL SCORE: {user.score} ({upScore-userData.score} points left to level up!)</h2>
      <h2>COINS: {user.coins}</h2>
      <h2>LIVES: {user.lives}</h2>
      </>
    ) : (
      <h1>Loading profile...</h1>)}
<br />
<br />
      <p>Disable feedback descriptions</p>
            <input type="checkbox" checked={disableFeedback} onChange={handleDisableFeedbackChange} />
      </section>
  
    </div>
    <div>
      <section>
      <img className='img_brain'></img>
      </section>
    </div>
    </div>
  )
}

export default ProfilePage