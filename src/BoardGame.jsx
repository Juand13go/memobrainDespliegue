import React, { useState, useEffect, useContext } from "react";
import "./board.css";
import {
  updateBiologyLevel,
  updateChemistryLevel,
  updateCodingLevel,
  updateLives,
  updateMathLevel,
  updatePhysicsLevel,
  updateScore,
  updateSpanishLevel,
} from "./conf/appwrite";
import { userContext } from "./App";
import { useNavigate } from "react-router-dom";

const BoardGame = ({
  lvs,
  width,
  showImg,
  showElementsBeforeStarting,
  showTime,
  levelDifficult,
  levelCategory,
  levelNum,
}) => {
  const board = [...lvs];
  const [closeBtn, setCloseBtn] = useState(["none", ""]);
  const [descriptTitle, setDescriptTitle] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [hideStartButton, setHideStartButton] = useState(false);
  const [score, setScore] = useState(0);
  const [errorCounter, setErrorCounter] = useState(0);
  const user = useContext(userContext);
  const navigate = useNavigate();
  const [nextLevel, setNextlevel] = useState(() => {
    if (levelNum >= 5) {
      return false;
    } else {
      return true;
    }
  });

  const handleLevelClick = () => {
    switch (levelCategory) {
      case "sp":
        navigate(`/level${levelNum + 1}`);
        break;
      case "ma":
        navigate(`/math-level${levelNum + 1}`);
        break;
      case "co":
        navigate(`/coding-level${levelNum + 1}`);
        break;
      case "bi":
        navigate(`/biology-level${levelNum + 1}`);
        break;
      case "ph":
        navigate(`/physics-level${levelNum + 1}`);
        break;
      case "ch":
        navigate(`/chemistry-level${levelNum + 1}`);
        break;
      default:
        break;
    }
  };

  const upCategoryLevel = (id) => {
    if (levelCategory == "sp") {
      for (let i = 1; i <= 10; i++) {
        if (levelNum == i && user.spanishlevel == i - 1) {
          updateSpanishLevel(id);
          break;
        }
      }
    } else if (levelCategory == "ma") {
      for (let i = 1; i <= 10; i++) {
        if (levelNum == i && user.mathlevel == i - 1) {
          updateMathLevel(id);
          break;
        }
      }
    } else if (levelCategory == "co") {
      for (let i = 1; i <= 10; i++) {
        if (levelNum == i && user.codinglevel == i - 1) {
          updateCodingLevel(id);
          break;
        }
      }
    } else if (levelCategory == "bi") {
      for (let i = 1; i <= 5; i++) {
        if (levelNum == i && user.biologylevel == i - 1) {
          updateBiologyLevel(id);
          break;
        }
      }
    } else if (levelCategory == "ph") {
      for (let i = 1; i <= 5; i++) {
        if (levelNum == i && user.physicslevel == i - 1) {
          updatePhysicsLevel(id);
          break;
        }
      }
    } else if (levelCategory == "ch") {
      for (let i = 1; i <= 5; i++) {
        if (levelNum == i && user.chemistrylevel == i - 1) {
          updateChemistryLevel(id);
          break;
        }
      }
    }
  };

  const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [element, setElements] = useState(() => {
    const shuffledBoard = shuffle(board);
    return shuffledBoard.map((item, index) => ({
      ...item,
      order: index,
      status: "close",
    }));
  });

  const [victoryMessage, setVictoryMessage] = useState("");

  const [time, setTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  let startGame = () => {
    setScore(() => {
      switch (levelDifficult) {
        case 1:
          return 250;
        case 2:
          return 500;
        case 3:
          return 750;
        case 4:
          return 1000;
        case 5:
          return 1250;
      }
    });
    if (!gameStarted) {
      setGameStarted(true);
    }

    let showElements = (elements) => {
      for (let i = 0; i < elements.length; i++) {
        element[i]["status"] = "open";
        setElements([...element]);
      }
    };

    let hideElements = (elements) => {
      for (let i = 0; i < elements.length; i++) {
        element[i]["status"] = "close";
        setElements([...element]);
      }
    };

    if (showElementsBeforeStarting) {
      showElements(element);
      setTimeout(() => {
        hideElements(element);
      }, showTime);
    }
  };

  let handleClick = (event, index) => {
    event.preventDefault();
    if (element[index]["status"] == "close") {
      element[index]["status"] = "open";
      setElements([...element]);
    }

    let val = validateRelation(element);
    if (val != null) {
      setElements([...val]);
    }
  };

  let validateRelation = (el) => {
    let info = el.filter((r) => {
      return r.status == "open";
    });
    if (info.length == 2) {
      if (info[1]["title"]) {
        if (info[0]["title"] == info[1]["title"]) {
          if (localStorage.getItem("Feedback") == "true") {
            setTimeout(() => {
              setDescriptTitle(info[0]["title"]);
              setCloseBtn(["flex", info[0]["descript"]]);
            }, 500);
            setGameStarted(false);
            setGamePaused(true);
          }

          return reset(el, true);
        } else {
          setErrorCounter((c) => c + 1);
          errorCounter >= 1
            ? updateLives(localStorage.getItem("id"), -1)
            : () => {};
          setTimeout(() => {
            reset(el, false);
          }, 300);
        }
      }
    } else {
      return null;
    }
  };

  let reset = (el, type) => {
    const fin = [];
    if (type) {
      el.map((r) => {
        if (r.status == "open") {
          r.status = "win";
          fin.push(r);
        } else {
          fin.push(r);
        }
      });
    } else {
      el.map((r) => {
        if (r.status == "open") {
          r.status = "close";
          fin.push(r);
        } else {
          fin.push(r);
        }
      });
    }

    return fin;
  };

  let close = () => {
    if (!gameFinished) {
      setGamePaused(false);
      setGameStarted(true);

      setCloseBtn(["none", ""]);
    } else {
      setGamePaused(false);
      setCloseBtn(["none", ""]);
    }
  };

  let gameReset = () => {
    setElements(() => {
      const shuffledBoard = shuffle(board);
      return shuffledBoard.map((item, index) => ({
        ...item,
        order: index,
        status: "close",
      }));
    });
  };

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);

        setScore((prevScore) => prevScore - levelDifficult * 4.5);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    const checkStatus = (el) => {
      for (let i = 1; i < el.length; i++) {
        if (el[i].status !== "win") {
          return false;
        }
      }

      setGameStarted(false);
      setGameFinished(true);

      setFinalTime(time);
      upCategoryLevel(localStorage.getItem("id"));

      setTimeout(() => {
        if (time === 1) {
          setVictoryMessage(
            <>
              <h1>Congratulations!</h1>
              <h4>You won in {time} second!</h4>
              <h3>SCORE: {parseInt(score > 0 ? score / 2 : 0)}</h3>
            </>
          );
        } else {
          setVictoryMessage(
            <>
              <h1>Congratulations!</h1>
              <h4>You won in {time} seconds!</h4>
              <h3>SCORE: {parseInt(score > 0 ? score / 2 : 0)}</h3>
            </>
          );
        }
      }, 1200);

      if (gameReset) {
        setVictoryMessage(null);
      }
    };
    checkStatus(element);
  }, [element]);

  useEffect(() => {
    if (gameFinished) {
      updateScore(localStorage.getItem("id"), parseInt(score / 2));
    }
  }, [finalTime]);

  return (
    <>
      <section className="top-section" >
      <h2>Time: {time}</h2>
      </section>
      <div className="board">
        <section className="initName" style={{ maxWidth: width }}>
          {victoryMessage && (
            <div className="victory-message">
              <h2>VICTORY!</h2>
              <>{victoryMessage}</>
              <div className="buttons">
                <button
                  onClick={
                    !gamePaused
                      ? () => {
                          if (user && user.lives == 0) {
                            alert(
                              "You don't have any lives!! Go to the shop to buy more."
                            );
                            return 0;
                          }
                          setVictoryMessage("");
                          setTime(0);
                          setFinalTime(0);
                          setErrorCounter(0);
                          setScore(() => {
                            switch (levelDifficult) {
                              case 1:
                                return 250;
                              case 2:
                                return 500;
                              case 3:
                                return 750;
                              case 4:
                                return 1000;
                              case 5:
                                return 1250;
                            }
                          });
                          gameReset();

                          setGameStarted(true);
                          setGamePaused(false);
                          setGameFinished(false);
                        }
                      : () => {}
                  }
                >
                  Play Again
                </button>
                <button
                  onClick={
                    !gamePaused
                      ? () => {
                          navigate("/learn");
                        }
                      : () => {}
                  }
                >
                  Go back
                </button>
                <button
                  className={nextLevel ? "" : "hidden"}
                  onClick={!gamePaused ? handleLevelClick : () => {}}
                >
                  Next Level
                </button>
              </div>
            </div>
          )}

          {element.map((res, index) => {
            return (
              <div
                className={`cell ${res.status == "open" ? "open" : ""} ${
                  res.status == "win" ? "win" : ""
                } ${res.status == "close" ? "close" : ""}`}
                key={index}
                style={{ order: res.order }}
                onClick={
                  gamePaused || !gameStarted
                    ? () => {alert("Close the description / Click start to continue")}
                    : (event) => handleClick(event, index)
                }
              >
                <span className="content">
                  {showImg ? (
                    <img width={"100px"} height={"100px"} src={res.img}></img>
                  ) : (
                    res.title
                  )}
                </span>
              </div>
            );
          })}
        </section>

        <div className="descript-ms" style={{ display: closeBtn[0] }}>
          <h1>{descriptTitle}</h1>
          <p>{closeBtn[1]}</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </div>



      <section className="start-section" style={{ position: 'relative', top: '30px' }}>
        <br />
        <button
          onClick={
            user && user.lives != 0
              ? () => {
                  startGame();
                  setHideStartButton(true);
                }
              : () => {
                  alert(
                    "You don't have any lives!! Go to the shop to buy more."
                  );
                  return 0;
                }
          }
          className={hideStartButton ? "hidden" : ""}
        >
          START GAME
        </button>
      </section>
    </>
  );
};

export default BoardGame;
