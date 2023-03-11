import { useContext } from "react"
import { MainContext } from "../context/mainContext"

const Header = () => {
    const {menu, setMenu, setSideState, sideState, profileUrl, userData, router} = useContext(MainContext);
    


    const handlePage = (prop) => {
        setSideState({
            [prop]: !sideState[prop]
        });
        router.push(`/${prop}`);
    }

  return (
    <div className="header m-h-fit flex_row">
        <div className="menu off xl-on xl6 l6 m5 mpad5"><img  alt="sendit" onClick={()=> setMenu(!menu)} src='img/menu_bar.png'/></div>
        <div onClick={()=>handlePage('inbox')} className="message_icon top_wrap l-off">
            <img className={sideState.inbox == true ? 'pulse': ''}  alt="sendit" src="svg/chat.svg" />
        </div>
        <div onClick={()=>handlePage('notification')} className="notifications_icon m-off top_wrap">
            <img className={sideState.notification == true ? 'pulse': ''} alt="sendit" src="svg/notification.svg" />
        </div>
        <div className="avatar_wrap xl2 l3 m5 flex_row">
            <div className="avatar_icon m-h-fit">
                <img  alt="sendit" src={ profileUrl !== undefined ? profileUrl : "svg/avatar.svg" } />
            </div>
            <p>{userData.userName}</p>
            <img  alt="sendit" src="svg/drop-arrow.svg" />
        </div>
    </div>
  )
}

export default Header