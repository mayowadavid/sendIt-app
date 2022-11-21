import { useContext } from "react"
import { MainContext } from "../context/mainContext"

const Header = () => {
    const {menu, setMenu, profileUrl, userData} = useContext(MainContext);

  return (
    <div className="header m-h-fit flex_row">
        <div className="menu off xl-on xl6 l6 m5 mpad5"><img  alt="sendit" onClick={()=> setMenu(!menu)} src='img/menu_bar.png'/></div>
        <div className="message_icon top_wrap l-off">
            <img  alt="sendit" src="svg/chat.svg" />
        </div>
        <div className="notifications_icon m-off top_wrap">
            <img  alt="sendit" src="svg/notification.svg" />
        </div>
        <div className="avatar_wrap xl2 l3 m5 flex_row">
            <div className="avatar_icon m-h-fit">
                <img  alt="sendit" className="m5" src={ profileUrl !== undefined ? profileUrl : "svg/avatar.svg" } />
            </div>
            <p>{userData.userName}</p>
            <img  alt="sendit" src="svg/drop-arrow.svg" />
        </div>
    </div>
  )
}

export default Header