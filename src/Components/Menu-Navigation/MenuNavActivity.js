import React from 'react'
import MenuIcon from './menu-icon.svg'
import FlagIcon from './flag-icon.svg'
import SplitIcon from './split-wise-left.png'
import MenuNavList from './MenuNavList'
import CollectionContainer from './CollectionContainer'
import InviteFriends from './InviteFriends'
import SocialButton from './SocialButton'
import FbLogo from './fblogo.png'
import TwLogo from './twitter.png'


function MenuNavActivity(){
    return(
        <div className="left-content">
            <ul className="ul-left-content">
                <MenuNavList url={SplitIcon} name="Dashboard" class="li-left-content-active" imgClass="dash-icon"/>
                <MenuNavList url={FlagIcon} name="Recent Activity" class="li-left-content" imgClass="flag-icon"/>
                <MenuNavList url={MenuIcon} name="All Expenses" class="li-left-content" imgClass="menu-icon"/>
            </ul>
            <CollectionContainer name="GROUPS" description="You do not have any groups yet."/>
            <CollectionContainer name="FRIENDS" description="You have not added any friends yet."/>
            <InviteFriends />
            <div style={{display:"flex",marginTop:"5px",padding:"0 5px"}}>
                <SocialButton name="Share" url={FbLogo} class="social-btn-facebook"/>
                <SocialButton name="Tweet" url={TwLogo} class="social-btn-twitter"/>
            </div>
        </div>
    )
}

export default MenuNavActivity