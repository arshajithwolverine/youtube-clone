import React from 'react'
import './Sidebar.css'
import SidebarRaw from './SidebarRaw'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRaw selected Icon={HomeIcon} title="Home" />
            <SidebarRaw Icon={WhatshotIcon} title="Trending" />
            <SidebarRaw Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRaw Icon={VideoLibraryIcon} title="Library" />
            <SidebarRaw Icon={HistoryIcon} title="History" />
            <SidebarRaw Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRaw Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRaw Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SidebarRaw Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar
