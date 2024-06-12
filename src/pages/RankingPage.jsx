import { useState, useEffect } from "react";
import conf from "../conf/conf";
import { databases } from "../conf/appwrite";
import './RankingPage.css'

const RankingPage = () => {
  const [users, setUsers] = useState([]); // State to store fetched users
  const [isLoading, setIsLoading] = useState(true); // Track loading state


 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const  response  = await databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId);
        setUsers(response.documents)
        
        setIsLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error("Error fetching users:", error);
        
      }
    };

    fetchUsers();
  }, []);

  console.log(users)

  return (
    <>
      {isLoading ? (
        <h1>Loading ranking...</h1>
      
      ) : (
        <>
        <div className="background">
          <br></br>
          <br></br>
          <br></br>

          <h1 className="tittle">RANKING</h1>
          {users.sort((a, b) => b.score - a.score).map((user) => {
            return(
            <div className='ranking' key={user.score}>
                <h2>{user.user}:</h2>
                <h3>TOTAL SCORE: {user.score}</h3>
                <h3>LEVEL: {user.level}</h3>
            </div>
            )
          })}
        </div>
        </>
      )}
    </>
  );
};

export default RankingPage;