import React from 'react'
import "./jobSearchFeed.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Badge from '@mui/material/Badge';
import UserInfo from '../../components/userInfo/UserInfo';
import JobPost from '../../components/jobPost/JobPost';
import JobPostLg from '../../components/jobPPostLg/JobPostLg';
import Navbar from '../../components/navbar/Navbar';




function JobSearchFeed() {
    return (
        <div className="jobSearchFeed">
            <div className="jsfWrapper">
                <Navbar/>
                {/* <div className="jsfCoverPicCon">
                    <img src="/assets/cover.jpeg" alt="" className="jsfCoverPic" />
                    <img src="/assets/profile.jpeg" alt="" className="jsfProfilePic" />
                </div> */}

                <div className="jsfBeforeSplit">
                    <div className="jsfLeftCon">
                        <UserInfo />
                    </div>

                    <div className="jsfCenterCon">
                        <div className="jsfRowIconCon">
                            <div className="jsfRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <HomeOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jsfRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <ChatOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jsfRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsNoneOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jsfRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <PeopleAltOutlinedIcon color="action" />
                                </Badge>
                            </div>

                            <div className="jsfRowIconItem">
                                <Badge badgeContent={4} color="primary">
                                    <OndemandVideoOutlinedIcon color="action" />
                                </Badge>
                            </div>
                        </div>
                        {/* job post */}
                        <JobPost />
                        <JobPostLg />
                    </div>
                    <div className="jsfRightCon"></div>
                </div>
            </div>
        </div>
    )
}

export default JobSearchFeed