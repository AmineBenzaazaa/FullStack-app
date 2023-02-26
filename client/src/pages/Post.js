import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Post() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState('');
    const [listComments, setListComments] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byid/${id}`).then((response)=>{
            setPost(response.data);
        },[])
    })
    useEffect(()=>{
        axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
            setListComments(response.data)
            console.log(listComments);
        })
      },[])
    const submitValue = (e) => {
        e.preventDefault();
        const frmdetails = {
            'Comment' : comment,
            'PostId' : id
        }
        // return console.log(comment,id);
        axios.post("http://localhost:3001/comments", frmdetails).then((response)=>{
            console.log("Comment inserted successfully")
            // const commentToAdd = {}
            // setListComments([...listComments,])

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
            <div className="comment-section">
                <h2>Comments</h2>
                <form >
                    <textarea name="comment" placeholder="Add a comment..." onChange={e => setComment(e.target.value) }></textarea>
                    <button onClick={submitValue}>Post</button>
                </form>
                <div className="comment-list" >
                {
                    listComments && listComments.length && listComments.map((value,key)=> {
                        return <div className="comment" key={value.id}>
                            <p>{value.Comment}</p>
                        </div>
                    })
                }
                </div>
                </div>

            </div>
        </div>
    )
}

export default Post