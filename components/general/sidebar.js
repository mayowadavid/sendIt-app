import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";

const Sidebar = () => {

    const { sideState, setSideState, menu, setMenu, userData, router } = useContext(MainContext);

    const handleProfile = (e) => {
        e.preventDefault();
        setSideState({
            profile: true
        });
        setMenu(!menu);
        router.push(`/${userData.userName}`);
    }

    const handleSideNav = (e, prop) => {
        e.preventDefault();
        setSideState({
            [prop]: !sideState[prop]
        });
        setMenu(!menu);
        router.push(`${prop}`);
    }


    const handleLogout = (e) => {
        e.preventDefault();
        
    }

    const closeMenu = (e) => {
        setMenu(!menu);
    }

  return (
    <div className={`sideBar_con xl10 ${menu == false ? 'xl-off': 'xl-abs xl-flex'}`}>
        <div className={`hidden_side mobile_side ${menu == false ? '' : 'xl-on xl3 l6'} xl-position-off flex_column`}>
                <div className="logo_wrap xl10 flex_row">
                <div className='logo_container xl10 '>
                    <div className='flow close flex_row xl5 xl-mg-tp5 xl-pad5'>
                        <img className="off xl-on" alt="sendit" onClick={closeMenu} src="/svg/close_small.svg" />
                    </div>
                    <div className='flow xl5 xl-mg-tp5'>
                        
                    </div>
                </div>
                    
                </div>
                <div className="side_middle_wrap xl10">
                    <div onClick={handleProfile} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={sideState.profile == true ? 'pulse' : ''} src="svg/profile.svg" />
                        </div>
                        <p>Profile</p>
                    </div>
                    <div onClick={(e)=>handleSideNav(e, 'track')} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={sideState.track == true ? 'pulse': ''} src="svg/plane.svg" />
                        </div>
                        <p>Track</p>
                    </div>
                    <div onClick={(e)=>handleSideNav(e, 'packages')} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={ sideState.packages == true ? 'pulse': ''} src="svg/box.svg" />
                        </div>
                        <p>Package</p>
                    </div>
                    <div onClick={(e)=>handleSideNav(e, 'transactions')} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={sideState.transactions == true ? 'pulse': ''} src="svg/transaction.svg" />
                        </div>
                        <p>Transaction</p>
                    </div>
                    <div onClick={(e)=>handleSideNav(e, 'billing')} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={sideState.billing == true ? 'pulse': ''} src="svg/wallet.svg" />
                        </div>
                        <p>wallet</p>
                    </div>
                    <div onClick={(e)=>handleSideNav(e, 'referral')} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={sideState.referral == true ? 'pulse': ''} src="svg/referral.svg" />
                        </div>
                        <p>referral</p>
                    </div>
                </div>
                <div className="side_footer_wrap xl10">
                    <div onClick={(e)=>handleSideNav(e, 'settings')} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" className={sideState.settings == true ? 'pulse': ''} src="svg/setting.svg" />
                        </div>
                        <p>settings</p>
                    </div>
                    <div onClick={handleLogout} className="icon_wrap xl-b-off l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img  alt="sendit" src="svg/logout.svg" />
                        </div>
                        <p>log out</p>
                    </div>
                </div>
        </div>
        <div onClick={closeMenu} className={`menu_shadow off ${menu == false ? '' : 'xl-on xl7 l4'}`}></div>
        <div className="side_bar_wrap xl-off flex_column">
                <div className="logo_wrap">

                </div>
                <div className="side_middle_wrap">
                    <div name="profile" className="profile_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.profile == true ? 'pulse': ''} src="svg/profile.svg" />
                    </div>
                    <div className="plane_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.track == true ? 'pulse': ''} src="svg/plane.svg" />
                    </div>
                    <div className="box_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.package == true ? 'pulse': ''} src="svg/box.svg" />
                    </div>
                    <div className="transaction_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.transactions == true ? 'pulse': ''} src="svg/transaction.svg" />
                    </div>
                    <div className="wallet_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.billing == true ? 'pulse': ''} src="svg/wallet.svg" />
                    </div>
                    <div className="wallet_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.referral == true ? 'pulse': ''} src="svg/referral.svg" />
                    </div>
                </div>
                <div className="side_footer_wrap">
                    <div className="settings_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" className={sideState.settings == true ? 'pulse': ''} src="svg/setting.svg" />
                    </div>
                    <div className="logOut_icon icon_wrap xl-b-off l10">
                        <img  alt="sendit" src="svg/logout.svg" />
                    </div>
                </div>
        </div>
    </div>
   
  )
}

export default Sidebar