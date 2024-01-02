import { useContext, useEffect } from "react";
import Button from './button';
import { MainContext } from '../context/mainContext';

const HomeHeader = () => {
    const { router } = useContext(MainContext);

     const handleAuth = (e) => {
        e.preventDefault();
        router.push("auth");
     }

  return (
        <div className="home-link-header mbw-jsty-btw mbw10 flex_row">
            <p>Sendit</p>
            <div onClick={handleAuth} className="button-wrap">
                <Button>Sign Up/ Login</Button>
            </div>
        </div>
  )
}

export default HomeHeader;
