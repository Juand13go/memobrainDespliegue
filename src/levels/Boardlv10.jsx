import React from "react";
import BoardGame from "../BoardGame";
import lv10 from "../data/lv10.json";

const Boardlv10 = () => {
  return (
    <>
      <h1>Spanish - Level 10</h1>

      <BoardGame
        lvs={lv10}
        width={"820px"}
        showImg={false}
        showElementsBeforeStarting={true}
        showTime={3000}
        levelDifficult={5}
        levelCategory={"sp"}
        levelNum={10}
      />
      {/* prop lvs = nombre del archivo json en donde esta la informacion del nivel, recordar importarlo*/}
      {/* prop width = (segun cantidad de elementos del board) establecer como: x5= 820px x4= 650px x3= 500px x2= 340px */}
      {/* prop showImg = establecer como true si el nivel en cuestion tendra imagenes, o false si tendra texto */}
      {/* prop showElementsBeforeStarting = establecer como true en los niveles de mayor dificultad (mayor cantidad de elementos), esto servirá para mostrar el contenido de los elementos del tablero de juego durante 2.5 segundos  */}
      {/* prop showTime = establece el tiempo que se mostraran los elementos antes de empezar, valores en milisegundos (1000 = 1s)*/}
    </>
  );
};

export default Boardlv10;
