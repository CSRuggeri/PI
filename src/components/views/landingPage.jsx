import style from "./landingPage.modules.css";

import LoginForm from "../Form/loginForm";

const LandingPage = ({login})=>{
    return(
        <div className={style.landingContainer}>
            <LoginForm login={login}/>
        </div>
    )
}

export default LandingPage;