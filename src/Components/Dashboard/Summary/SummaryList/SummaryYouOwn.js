import React from "react";
import SummaryOwnContent from './SummaryOwnContent'
import ProfileImg2 from '../../../profile1.jpg'
import ProfileImg3 from '../../../profile3.jpeg'

function SummaryYouOwn(){
    return (
        <div className="you-are-owe">
            <SummaryOwnContent aClass="sumary-you-own-inside-p" url={ProfileImg2} amount="$61.50" name="Travis Scott"/>
            <SummaryOwnContent aClass="sumary-you-own-inside-p" url={ProfileImg3} amount="$23.00" name="Marshmello"/>
        </div>
    )
}

export default SummaryYouOwn