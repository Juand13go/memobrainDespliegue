import React from "react";
import BoardGame from "../BoardGame";
import lv7m from "../data/lv7m.json";

const Boardlv7m = () => {
  return (
    <>
      <h1>Math - Level 7</h1>

      <BoardGame
        lvs={lv7m}
        width={"1000px"}
        showImg={false}
        showElementsBeforeStarting={true}
        showTime={3000}
        levelDifficult={4}
        levelCategory={"ma"}
        levelNum={7}
      />
      {/* prop lvs = nombre del archivo json en donde esta la informacion del nivel, recordar importarlo*/}
      {/* prop width = (segun cantidad de elementos del board) establecer como: x5= 820px x4= 650px x3= 500px x2= 340px */}
      {/* prop showImg = establecer como true si el nivel en cuestion tendra imagenes, o false si tendra texto */}
      {/* prop showElementsBeforeStarting = establecer como true en los niveles de mayor dificultad (mayor cantidad de elementos), esto servirá para mostrar el contenido de los elementos del tablero de juego durante 2.5 segundos  */}
      {/* prop showTime = establece el tiempo que se mostraran los elementos antes de empezar, valores en milisegundos (1000 = 1s)*/}
    </>
  );
};

export default Boardlv7m;
