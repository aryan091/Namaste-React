import React from 'react'


const User = (props) => {

  

  const {data} = props


  return (
    
    <div className="card shadow-2xl m-8 p-8 flex flex-col justify-center items-center w-80 h-96 bg-gray-900 rounded-lg">
      <img src={data.avatar_url} alt="Person" className="card__image h-40 w-40 rounded-full" />
      <p className="card__name font-bold text-lg text-center my-2 text-gray-400">{data.name}</p>
      <div className="grid-container">
        <div className="grid-child-posts text-gray-400 ">
          {data.public_repos} Repos
        </div>
        <div className="grid-child-followers text-gray-400">
          {data.followers} Followers
        </div>
        <div className="grid-child-following text-gray-400">
          {data.following} Following
        </div>
      </div>
     
      
    </div>
  
  )
}

export default User