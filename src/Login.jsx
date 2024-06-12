import { React, useState, useEffect, useRef } from "react";
import textCamara from "./img/camara.jpg";
import logoCamara from "./img/logoCamara.jpg";
import "./login.css";



const Login = () => {
  //Se inicializan como null
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const regex = /\s+/g


  if (localStorage.getItem("login") == "logged in") {
    window.location("/");
  }

  const [users, setUsers] = useState([]);



  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MesaDavisEnterprises/API_URL/main/USERS_DATA.json"
    )
      .then((response) => response.json())

      .then((res) => {
        let info = res.filter((r) => {
          let char = "T2 ";
          if (r.user_name.search(char) !== -1) {
            return r;
          }
        });

        info.push({user_name: "TEST USER", email: "testacc@test.com", password: "1234"})
        info.push({user_name: "TEST USER2", email: "testacc2@test.com", password: "12345"})
        setUsers(info);
        
        console.log(info);
      });
  }, []);

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const em = emailRef.current.value;
    const ps = passRef.current.value;

    const vEmail = validateEmail(em);

    let email = "";

    try {
      if (!vEmail) {
        email = null;
        alert("The email is not valid.");
      }
    } catch (error) {
      console.log("Invalid email format.");
    }

    email = vEmail[0];
    let pass = ps;

    // si no hay error el email pasa y se carga para validación de la api de lo contrario detiene el proceso
    if (email == null) {
      return;
    }

    if (ps == null) {
      return;
    }

    console.log(email, pass);

    let validate_login = false;

    try {
      for (let i in users) {
        if (email === users[i].email && pass === users[i].password) {
          validate_login = true;
          localStorage.setItem("user", users[i].user_name);
          let user_id = users[i].user_name;
          let final_user_id = user_id.replace(regex, "")
          localStorage.setItem("id", final_user_id)
          localStorage.setItem("Feedback", true)
          
          

          }
      }
    } catch (e) {
      console.log(e, "Error finding the user");
    }

    if (validate_login) {
      
      localStorage.setItem("login", "logged in");
      window.location = "/";
    } else {
      alert("Could not find your user / Incorrect email or password.");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  


  return (
    <>
    <container className="flex">
      <section className="memo">
      <h1>
        
      </h1>
      </section>

      {/**/}
      <form onSubmit={handleSubmit}>
        
      <div id="rays">

      <path
        fill="url(#paint0_linear_8_3)"
        d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z"
      ></path>



       
        <div className="container">
          {/*puedes agregar la clase general-error*/}
          <div className="login">
            <div className="logo">
              <img src={logoCamara} alt="" />
              <img src={textCamara} alt="" />
            </div>
            {/*puedes agregar la clase error*/}
            <div className="input">
              <label>Email</label>
              {/**/}
              <input
                ref={emailRef}
                type="text"
                name="email"
                placeholder="Enter your Email"
              />
              {/* <p className="hidden">Error: email no encontrado</p> */}
            </div>
            {/*puedes agregar la clase error*/}
            <div className="input">
              <label>Password</label>
              {/* r */}
              <input
                ref={passRef}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {/* <p className="hidden">Error: login no encontrado</p> */}
            </div>

            <button type="submit" className="btn-login">
              LOGIN
            </button>

            <div className="loginFooter">
              <span>Register here</span>
              <span>Forgot password?</span>
            </div>
          </div>
        </div>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </container>
    </>
  );
};

export default Login;