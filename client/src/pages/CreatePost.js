import React from 'react'
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'


function CreatePost() {
    const {navigate} = useNavigate();
  
    const initialValues = {
        title: "",
        postText: "",
        username:""
    } 
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must fill this input"),
        postText: Yup.string().required("You must fill this input"),
        username: Yup.string().min(3).max(15).required("You must fill this input"),
    })
    const onSubmit = (data) =>{
        axios.post("http://localhost:3001/posts", data).then((response)=>{
            console.log("Data inserted successfully")
            navigate("/")
    })
    }
  return (
    <div>
        <Formik initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
            >
            <Form className='formContainer'>
                <label htmlFor="title">Title</label>
                <Field  id="inputCreatePost" name="title" placeholder="(ex. Title...)"/>
                <ErrorMessage name="title" component="span"/>
                <label htmlFor="title">postText</label>
                <Field id="inputCreatePost" name="postText" placeholder="(ex. Post Text...)"/>
                <ErrorMessage name="postText" component="span"/>
                <label htmlFor="title">username</label>
                <Field id="inputCreatePost" name="username" placeholder="(ex. Username...)"/>
                <ErrorMessage name="username" component="span"/>
                <button type='submit'>Create a Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost