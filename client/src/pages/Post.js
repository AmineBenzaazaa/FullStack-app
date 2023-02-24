import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Post() {
    let {id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byid/${id}`).then((response)=>{
            setPost(response.data);
        },[])
    })

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                <div className="title"> {post.title} </div>
                <div className="body">{post.postText}</div>
                <div className="footer">{post.username}</div>
                </div>
            </div>
            <div className="rightSide">Comment Section</div>
        </div>
    )
}

export default Post