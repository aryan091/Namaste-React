import React from 'react'


const User = (props) => {

  

  const {data} = props


  return (
    
    <div className="card">
      <img src={data.avatar_url} alt="Person" className="card__image" />
      <p className="card__name">{data.name}</p>
      <div className="grid-container">
        <div className="grid-child-posts">
          {data.public_repos} Repos
        </div>
        <div className="grid-child-followers">
          {data.followers} Followers
        </div>
        <div className="grid-child-following">
          {data.following} Following
        </div>
      </div>
     
      
    </div>
  
  )
}

export default User