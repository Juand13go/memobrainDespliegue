import { Client, Databases } from "appwrite";
import conf from "./conf.js";

export const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId); // Replace with your project ID

export { ID } from "appwrite";

export const databases = new Databases(client);

export const createUser = async (id, user) => {
  try {
    await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { user: user, level: 0, score: 0, coins: 100, lives: 20, spanishlevel: 0, mathlevel: 0, codinglevel: 0, biologylevel: 0, physicslevel: 0, chemistrylevel: 0 }
    );
  } catch (error) {
    console.log(error);
  }
};



export const updateScore = async (id, score) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentScore = document.score;

    if(score <= 0){
      score = 0;
    }

    let updatedScore = currentScore + score;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { score: updatedScore }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentLevel = document.level;
    let currentScore = document.score;
    let currentCoins = document.coins

    let updatedLevel;
    let updatedCoins;

    if(currentScore >=3000 && currentLevel == 0){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 5;
    } else if (currentScore >= 9000 && currentLevel == 1){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 8;
    } else if (currentScore >= 15000 && currentLevel == 2){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 15    
    } else if (currentScore >= 20000 && currentLevel == 3){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 20     
    } else if (currentScore >= 30000 && currentLevel == 4){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 25     
    } else if (currentScore >= 45000 && currentLevel == 5){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 27     
    } else if (currentScore >= 60000 && currentLevel == 6){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 30     
    } else if (currentScore >= 100000 && currentLevel == 7){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 32     
    } else if (currentScore >= 150000 && currentLevel == 8){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 40     
    } else if (currentScore >= 210000 && currentLevel == 9){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 50     
    } else if (currentScore >= 300000 && currentLevel == 10){
      updatedLevel = currentLevel + 1;
      updatedCoins = currentCoins + 100     
    }

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { level: updatedLevel, coins: updatedCoins }
    );
  } catch (error) {
    console.log(error);
  }
};


export const updateCoins = async (id, value) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    
    let currentCoins = document.coins;

    let updatedCoins = currentCoins + value;


     

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { coins: updatedCoins }
    );
  } catch (error) {
    console.log(error);
  }
};


export const updateLives = async (id, value) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentLives = document.lives;

    let updatedLives = currentLives + value;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { lives: updatedLives }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateSpanishLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentCategoryLevel = document.spanishlevel;


   

    let updatedLevel = currentCategoryLevel + 1;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { spanishlevel: updatedLevel }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateMathLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentCategoryLevel = document.mathlevel;


   

    let updatedLevel = currentCategoryLevel + 1;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { mathlevel: updatedLevel }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateCodingLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentCategoryLevel = document.codinglevel;


   

    let updatedLevel = currentCategoryLevel + 1;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { codinglevel: updatedLevel }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateBiologyLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentCategoryLevel = document.biologylevel;


   

    let updatedLevel = currentCategoryLevel + 1;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { biologylevel: updatedLevel }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updatePhysicsLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentCategoryLevel = document.physicslevel;


   

    let updatedLevel = currentCategoryLevel + 1;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { physicslevel: updatedLevel }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateChemistryLevel = async (id) => {
  try {
    const document = await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    let currentCategoryLevel = document.chemistrylevel;


   

    let updatedLevel = currentCategoryLevel + 1;

    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      { chemistrylevel: updatedLevel }
    );
  } catch (error) {
    console.log(error);
  }
};