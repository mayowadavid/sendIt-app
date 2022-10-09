import { useContext } from "react"
import { MainContext } from "../context/mainContext"

const Header = () => {
    const {menu, setMenu} = useContext(MainContext);

    const handleMenu = (e) => {
        e.preventDefault();
        setMenu(!menu);
    }
  return (
    <div className="header m-h-fit flex_row">
        <div className="menu l5 mpad5"><img onClick={handleMenu} src='/img/menu_bar.png'/></div>
        <div className="message_icon top_wrap m-off">
            <img onClick={()=> setMenu(!menu)} src="svg/chat.svg" alt=""/>
        </div>
        <div className="notifications_icon m-off top_wrap">
            <img src="svg/notification.svg" alt=""/>
        </div>
        <div className="avatar_wrap m5 flex_row">
            <div className="avatar_icon m-h-fit">
                <img className="m5" src="svg/avatar.svg" alt=""/>
            </div>
            <p>David</p>
            <img src="svg/drop-arrow.svg" alt=""/>
        </div>
    </div>
  )
}

export default Header