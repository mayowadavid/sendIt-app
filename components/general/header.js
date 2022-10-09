import { useContext } from "react"
import { MainContext } from "../context/mainContext"
import Image from 'next/image'

const Header = () => {
    const {menu, setMenu} = useContext(MainContext);

    const handleMenu = (e) => {
        e.preventDefault();
        setMenu(!menu);
    }
  return (
    <div className="header m-h-fit flex_row">
        <div className="menu l5 mpad5"><Image alt="sendit" onClick={handleMenu} src='/Image/menu_bar.png'/></div>
        <div className="message_icon top_wrap m-off">
            <Image alt="sendit" onClick={()=> setMenu(!menu)} src="svg/chat.svg" />
        </div>
        <div className="notifications_icon m-off top_wrap">
            <Image alt="sendit" src="svg/notification.svg" />
        </div>
        <div className="avatar_wrap m5 flex_row">
            <div className="avatar_icon m-h-fit">
                <Image alt="sendit" className="m5" src="svg/avatar.svg" />
            </div>
            <p>David</p>
            <Image alt="sendit" src="svg/drop-arrow.svg" />
        </div>
    </div>
  )
}

export default Header