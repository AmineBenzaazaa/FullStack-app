import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Home() {

  const [listsofPosts, setListsofPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3001/posts").then((response)=>{
      setListsofPosts(response.data)
    })
  },[])
  

  return (
    <div>
        {
        listsofPosts.map((value,key)=> {
          return <div className='post' key={value.id} onClick={() => navigate(`/post/${value.id}`)}>
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