import React from 'react'
import './TrendCard.css'

// import {TrendData} from '../../Data/TrendData.js'
import '../../components/FollowersCard/FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
const TrendCard = () => {
  return (
    <div className="TrendCard">
            <h3>Các mentors/ mentee tiêu biểu</h3>
            {Followers.map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}

    </div>
  )
}

export default TrendCard