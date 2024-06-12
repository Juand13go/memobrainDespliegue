import { useState, useEffect } from 'react';
import './board.css';
import lv1 from './data/lv1.json';


const BoardGameTest = () => {
  const board = [...lv1];
  const [closeBtn, setCloseBtn] = useState(["none", ""]);
  const [gameStarted, setGameStarted] = useState(false);

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

  let handleClick = (event, index) => {
    event.preventDefault();
    if (!gameStarted) {
      setGameStarted(true);
    }

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
          setCloseBtn(["flex", info[0]["descript"]]);
          setTimeout(() => {
            setCloseBtn(["none", ""]);
          }, 6000);
          return reset(el, true);
        } else {
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
    setCloseBtn(["none", ""]);
  };

  let gameReset = () => {
    const fin = [];
    element.map((r) => {
      if (r.status == "open" || r.status == "win" || r.status == "close") {
        r.status = "close";
        fin.push(r);
      }
    });
    setElements([...fin]);
    setTime(0);
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
      setFinalTime(time);
      
      
      

      setTimeout(() => {
        if (time === 1) {
          setVictoryMessage("Congratulations! You won in " + time + " second!");
        } else {
          setVictoryMessage(
            "Congratulations! You won in " + time + " seconds!"
          );
        }
      }, 1200);

      if (gameReset) {
        setVictoryMessage(null);
      }
    };
    checkStatus(element);
  }, [element]);

  return (
    <>
      <h2>Time: {time}</h2>
      <div className="board">
        <section className="initName" >
          {victoryMessage && (
            <div className="victory-message">
              <h2>VICTORY!</h2>
              <p>{victoryMessage}</p>
              <button
                onClick={() => {
                  setVictoryMessage("");
                  gameReset();
                }}
              >
                Play Again
              </button>
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
                onClick={(event) => handleClick(event, index)}
              >
                <span className="content">{res.title}</span>
              </div>
            );
          })}
        </section>

        <div className="ms" style={{ display: closeBtn[0] }}>
          <p>{closeBtn[1]}</p>
          <span onClick={close}>x</span>
        </div>
      </div>
    </>
  );
};


export default BoardGameTest