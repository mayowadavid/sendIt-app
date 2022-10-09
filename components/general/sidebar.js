import {useRouter} from 'next/router';
import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";

const Sidebar = () => {
    const router = useRouter();

    const { sideState, setSideState, menu, setMenu } = useContext(MainContext);

    const handleProfile = (e) => {
        e.preventDefault();
        setSideState({
            profile: true
        });
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
            package: true
        });
        router.push('/packages');
    }

    const handleReferral = (e) => {
        e.preventDefault();
        setSideState({
            referral: true
        });
        router.push('/referral');
    }

    const handleLogout = (e) => {
        e.preventDefault();
        
    }

    const closeMenu = (e) => {
        setMenu(!menu);
    }

  return (
    <div className={`sideBar_con l10 ${menu == false ? 'xl-off': 'l-abs'}`}>
        <div className={`hidden_side ${menu == false ? '' : 'l-on l6'} flex_column`}>
                <div className="logo_wrap l10 flex_row">
                <div className='logo_container l10 '>
                    <div className='flow flex_row l5 l-mg-tp5 lpad5'>
                        <img onClick={closeMenu} src="/svg/close_small.svg" />
                    </div>
                    <div className='flow l5 l-mg-tp5'>
                        <img src="" />
                    </div>
                </div>
                    
                </div>
                <div className="side_middle_wrap l10">
                    <div onClick={handleProfile} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={sideState.profile == true ? 'pulse' : ''} src="svg/profile.svg" alt=""/>
                        </div>
                        <p>Profile</p>
                    </div>
                    <div onClick={handleTrack} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={sideState.track == true ? 'pulse': ''} src="svg/plane.svg" alt=""/>
                        </div>
                        <p>Track</p>
                    </div>
                    <div onClick={handlePackage} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={ sideState.package == true ? 'pulse': ''} src="svg/box.svg" alt=""/>
                        </div>
                        <p>Package</p>
                    </div>
                    <div onClick={handleTransaction} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={sideState.transaction == true ? 'pulse': ''} src="svg/transaction.svg" alt=""/>
                        </div>
                        <p>Transaction</p>
                    </div>
                    <div onClick={handleWallet} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={sideState.wallet == true ? 'pulse': ''} src="svg/wallet.svg" alt=""/>
                        </div>
                        <p>wallet</p>
                    </div>
                    <div onClick={handleReferral} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={sideState.referral == true ? 'pulse': ''} src="svg/referral.svg" alt=""/>
                        </div>
                        <p>referral</p>
                    </div>
                </div>
                <div className="side_footer_wrap l10">
                    <div onClick={handleSettings} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img className={sideState.settings == true ? 'pulse': ''} src="svg/setting.svg" alt=""/>
                        </div>
                        <p>settings</p>
                    </div>
                    <div onClick={handleLogout} className="icon_wrap l10 hide_wrap flex_row">
                        <div className="side_row l3 flex_column">
                            <img src="svg/logout.svg" alt=""/>
                        </div>
                        <p>log out</p>
                    </div>
                </div>
        </div>
        <div className="side_bar_wrap xl-off flex_column">
                <div className="logo_wrap">

                </div>
                <div className="side_middle_wrap">
                    <div name="profile" className="profile_icon icon_wrap l10">
                        <img className={sideState.profile == true ? 'pulse': ''} src="svg/profile.svg" alt=""/>
                    </div>
                    <div className="plane_icon icon_wrap l10">
                        <img className={sideState.track == true ? 'pulse': ''} src="svg/plane.svg" alt=""/>
                    </div>
                    <div className="box_icon icon_wrap l10">
                        <img className={sideState.package == true ? 'pulse': ''} src="svg/box.svg" alt=""/>
                    </div>
                    <div className="transaction_icon icon_wrap l10">
                        <img className={sideState.transaction == true ? 'pulse': ''} src="svg/transaction.svg" alt=""/>
                    </div>
                    <div className="wallet_icon icon_wrap l10">
                        <img className={sideState.wallet == true ? 'pulse': ''} src="svg/wallet.svg" alt=""/>
                    </div>
                    <div className="wallet_icon icon_wrap l10">
                        <img className={sideState.referral == true ? 'pulse': ''} src="svg/referral.svg" alt=""/>
                    </div>
                </div>
                <div className="side_footer_wrap">
                    <div className="settings_icon icon_wrap l10">
                        <img className={sideState.settings == true ? 'pulse': ''} src="svg/setting.svg" alt=""/>
                    </div>
                    <div className="logOut_icon icon_wrap l10">
                        <img src="svg/logout.svg" alt=""/>
                    </div>
                </div>
        </div>
    </div>
   
  )
}

export default Sidebar