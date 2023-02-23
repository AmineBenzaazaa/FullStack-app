import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [listsofPosts, setListsofPosts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/posts").then((response)=>{
      setListsofPosts(response.data)
      console.log(listsofPosts);
    })
  },[])

  return (
    <div>
        {
        listsofPosts.map((value,key)=> { 
          return <div className='post'>
            <div className='title'>
              {value.title}
            </div>
            <div className='body'>
              {value.postText}
            </div>
            <div className='footer'>
              {value.username}
            </div>
            </div>
        })
      }
    </div>
  )
}

export default Home