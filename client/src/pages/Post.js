import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Post() {
    let {id} = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byid/${id}`).then((response)=>{
            setPost(response.data);
        },[])
    })
    const submitValue = () => {
        const frmdetails = {
            'Comment' : comment,
        }
        axios.post("http://localhost:3001/comments", frmdetails).then((response)=>{
            console.log("Data inserted successfully")
            navigate("/")
        })
    }
    

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                <div className="title"> {post.title} </div>
                <div className="body">{post.postText}</div>
                <div className="footer">{post.username}</div>
                </div>
            </div>
            <div className="rightSide">
            <div class="comment-section">
                <h2>Comments</h2>
                <form>
                    <textarea name="comment" placeholder="Add a comment..." onChange={e => setComment(e.target.value) }></textarea>
                    <button onClick={submitValue}>Post</button>
                </form>
                <div class="comment-list">
                    <div class="comment">
                    <h3>User1</h3>
                    <p>Comment1</p>
                    </div>
                    <div class="comment">
                    <h3>User2</h3>
                    <p>Comment2</p>
                    </div>
                    <div class="comment">
                    <h3>User3</h3>
                    <p>Comment3</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Post