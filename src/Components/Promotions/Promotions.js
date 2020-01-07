import React from 'react'
import PromotionsText from './PromotionsText'
import PromotionButton from './PromotionButton'
import AppleIcon from './appStore.png'
import GoogleIcon from './playStore.png'


function Promotion(){
    return(
        <div className="promotions">
            <PromotionsText class="promotions-header" text="splitwise on the go" />
            <PromotionsText class="promotions-center" text="Get the free Splitwise app and add IOUs from anywhere:" />
            <PromotionButton imgClass="promotion-img" icon={AppleIcon} />
            <PromotionButton imgClass="promotion-img-2" icon={GoogleIcon} />
            <p className="promotions-small">+ third-party apps for <span style={{color: "skyBlue"}}>Windows Phone</span></p>
            <PromotionsText class="promotions-header" text="advertisement" />
        </div>
    )
}

export default Promotion