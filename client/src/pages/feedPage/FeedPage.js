import React from 'react'
import "./feedPage.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Badge from '@mui/material/Badge';
import UserInfo from '../../components/userInfo/UserInfo';
import JobPost from '../../components/jobPost/JobPost';
import JobPostLg from '../../components/jobPPostLg/JobPostLg';
import FeedPost from '../../components/feedPost/FeedPost';
import FeedPostCreate from '../../components/feedPostCreate/FeedPostCreate';
import Navbar from '../../components/navbar/Navbar';



function FeedPage() {
    return (
        <div className="feedPage">
            <div className="fpWrapper">
                <Navbar/>
                {/* <div className="fpCoverPicCon">
                    <img src="/assets/cover.jpeg" alt="" className="fpCoverPic" />
                    <img src="/assets/profile.jpeg" alt="" className="fpProfilePic" />
                </div> */}

                <div className="fpBeforeSplit">

                    <div className="fpLeftCon">
                        {/* <UserInfo /> */}
                    </div>

                    
                    <div className="fpCenterCon">
                        <div className="fpRowIconCon">
                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <HomeOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <ChatOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsNoneOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <PeopleAltOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="fpRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <OndemandVideoOutlinedIcon color="action" />
                                </Badge>
                            </div>
                        </div>


                        {/* job post */}
                        <JobPost />


                        <JobPostLg />
                        <FeedPost />
                        <FeedPostCreate />


                    </div>
                    <div className="fpRightCon"></div>
                </div>







            </div>

        </div>
    )

}






export default FeedPage