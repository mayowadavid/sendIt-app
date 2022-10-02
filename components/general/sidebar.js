import {useRouter} from 'next/router';
import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";

const Sidebar = () => {
    const router = useRouter();

    const { sideState, setSideState } = useContext(MainContext);

    const handleProfile = (e) => {
        e.preventDefault();
        const {name} = e.target;
        console.log(name);
        // setSideState({
        //     profile: true
        // });
        // router.push('/index');
    }

    const handleWallet = (e) => {
        e.preventDefault();
        setSideState({
            wallet: true
        });
        router.push('/billing');
    }

    const handleTransaction = (e) => {
        e.preventDefault();
        setSideState({
            transaction: true
        });
        router.push('/transactions');
    }

    const handleSettings = (e) => {
        e.preventDefault();
        setSideState({
            settings: true
        });
        router.push('/settings');
    }

    const handleTrack = (e) => {
        e.preventDefault();
        setSideState({
            track: true
        });
        router.push('/track');
    }

    const handlePackage = (e) => {
        e.preventDefault();
        setSideState({
            track: true
        });
        router.push('/package');
    }

    const handleLogout = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className="sideBar_con xl-off">
        <div className="hidden_side flex_column">
                <div className="logo">
    
                </div>
                <div className="side_middle_wrap">
                    <div onClick={handleProfile} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img className='pulse' src="svg/profile.svg" alt=""/>
                        </div>
                        <p>Profile</p>
                    </div>
                    <div onClick={handleTrack} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img className={sideState.wallet == true ? 'pulse': ''} src="svg/plane.svg" alt=""/>
                        </div>
                        <p>package</p>
                    </div>
                    <div onClick={handlePackage} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img className={sideState.track == true ? 'pulse': ''} src="svg/box.svg" alt=""/>
                        </div>
                        <p>Track</p>
                    </div>
                    <div onClick={handleTransaction} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img className={sideState.transaction == true ? 'pulse': ''} src="svg/transaction.svg" alt=""/>
                        </div>
                        <p>Transaction</p>
                    </div>
                    <div onClick={handleWallet} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img className={sideState.wallet == true ? 'pulse': ''} src="svg/wallet.svg" alt=""/>
                        </div>
                        <p>wallet</p>
                    </div>
                </div>
                <div className="side_footer_wrap">
                    <div onClick={handleSettings} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img className={sideState.settings == true ? 'pulse': ''} src="svg/setting.svg" alt=""/>
                        </div>
                        <p>settings</p>
                    </div>
                    <div onClick={handleLogout} className="icon_wrap hide_wrap flex_row">
                        <div className="side_row flex_column">
                            <img src="svg/logout.svg" alt=""/>
                        </div>
                        <p>log out</p>
                    </div>
                </div>
        </div>
        <div className="side_bar_wrap flex_column">
                <div className="logo">

                </div>
                <div className="side_middle_wrap">
                    <div name="profile" className="profile_icon icon_wrap">
                        <img className={sideState.profile == true ? 'pulse': ''} src="svg/profile.svg" alt=""/>
                    </div>
                    <div className="plane_icon icon_wrap">
                        <img className={sideState.wallet == true ? 'pulse': ''} src="svg/plane.svg" alt=""/>
                    </div>
                    <div className="box_icon icon_wrap">
                        <img className={sideState.track == true ? 'pulse': ''} src="svg/box.svg" alt=""/>
                    </div>
                    <div className="transaction_icon icon_wrap">
                        <img className={sideState.transaction == true ? 'pulse': ''} src="svg/transaction.svg" alt=""/>
                    </div>
                    <div className="wallet_icon icon_wrap">
                        <img className={sideState.wallet == true ? 'pulse': ''} src="svg/wallet.svg" alt=""/>
                    </div>
                </div>
                <div className="side_footer_wrap">
                    <div className="settings_icon icon_wrap">
                        <img className={sideState.settings == true ? 'pulse': ''} src="svg/setting.svg" alt=""/>
                    </div>
                    <div className="logOut_icon icon_wrap">
                        <img src="svg/logout.svg" alt=""/>
                    </div>
                </div>
        </div>
    </div>
   
  )
}

export default Sidebar