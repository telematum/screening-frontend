import React from 'react'
import Calendar from './Calendar.icon';
import Clock from './Clock.icon';
import GreenStar from './GreenStar.icon';
import OrangeStar from './OrangeStar.icon';
import Actions from './Actions.icon';

const Icons = ({ children, className }) => {
    return (
        <div className={`w-4 h-4 ${className}`}>{children}</div>
    )
}

Icons.Calendar = Calendar;
Icons.Clock = Clock;
Icons.GreenStar = GreenStar;
Icons.OrangeStar = OrangeStar;
Icons.Actions = Actions;


export default Icons