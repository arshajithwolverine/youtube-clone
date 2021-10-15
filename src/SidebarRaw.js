import React from 'react'
import './SidebarRaw.css'

function SidebarRaw({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className='sidebarRaw__icon' />
            <h2 className='sidebarRaw__title'>{title}</h2>
        </div>
    );
}

export default SidebarRaw
