import axios from "axios";
import styles from "./App.module.css"; 
import Nav from "./components/NavBar/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
// aqui
import React, {useEffect, useState}from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";


import LoginForm from "./components/Form/loginForm"


function App() {
 
 function onClose(id){
setCharacters(characters.filter((pj) =>{
  return pj.id !== id
})
);
 }
 function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        
     }
     
  }).catch(()=> window.alert('¡No hay personajes con este ID!'))
}
const navigate = useNavigate(); 
const [access, setAccess] = React.useState(false);
const EMAIL = "ejemplo@gmail.com";
const PASSWORD = "123456";

function logout() {
  setAccess(false);
}
function login(userData) {
  if (userData.password === PASSWORD && userData.email === EMAIL) {
    setAccess(true);
    navigate("/home");
  }
}

useEffect(() => {
  !access && navigate("/");
  
}, [access]);

const [characters, setCharacters] = useState([]); 

const location = useLocation();

return (
  <div className={styles.App}>
    {location.path !== "/" && <Nav onSearch={onSearch} out={logout} />}
    <Routes>
      <Route
        path="/home"
        element={<Home characters={characters} onClose={onClose} />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/" element={<LoginForm login={login} />} />
      {/* <Route path="/favorites" element={<Favorites />} /> */}
    </Routes>
  </div>
);
}

export default App;
