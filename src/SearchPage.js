import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon className="searchPage__filterIcon" />
                <h2>Filter</h2>
            </div>

            <hr />
            <ChannelRow
                image="https://firebasestorage.googleapis.com/v0/b/clone-22254.appspot.com/o/avatar.jpg?alt=media&token=32e82ca6-0208-478d-bb64-02f626b0bc7c"
                channel="arshu_logan"
                verified
                subs="619K"
                noOfVideos={399}
                description="Learn programming with arshu_logan. Come join today with just INR 1000/- per month. You shouldn't miss this great opertunity"
            />
            <hr />
            <VideoRow
                views="1.1M"
                timestamp="59 minutes ago"
                title="Mud Race 2k20"
                image="https://firebasestorage.googleapis.com/v0/b/clone-22254.appspot.com/o/y2.jpg?alt=media&token=031b86d8-1166-4f34-8338-6fa4775957a0"
                channel="arshu_logan"
                subs="619K"
                noOfVideos={399}
                description="Learn programming with arshu_logan. Come join today with just INR 1000/- per month. You shouldn't miss this great opertunity"
            />

        </div>
    )
}

export default SearchPage
