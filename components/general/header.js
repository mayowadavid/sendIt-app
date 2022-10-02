const Header = () => {
  return (
    <div className="header m-h-fit flex_row">
        <div className="message_icon top_wrap m-off">
            <img src="svg/chat.svg" alt=""/>
        </div>
        <div className="notifications_icon m-off top_wrap">
            <img src="svg/notification.svg" alt=""/>
        </div>
        <div className="avatar_wrap flex_row">
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