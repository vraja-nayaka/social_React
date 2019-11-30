import React from 'react';
import style from '../profile.module.css';
import { Field, reduxForm } from 'redux-form';

const Post = (props) => {
    return <div className={style.post}>
        <img src="https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg"></img>
        <a href="#">{props.message}</a>
        {props.likesCount} likes
  </div>
};

const MyPosts = (props) => {

    let PostsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    let addPost = (values) => {
        props.addPost(values.newPostText);
    };
    return <div>
        <h3>My posts</h3>
        <MyPostsForm onSubmit={addPost}/>
        <div> {PostsElements} </div>
    </div>
};


const Form = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            name="newPostText"
            component="input"
            type="text"
            placeholder='Введите текст поста'>
        </Field>
        <button type="submit">Опубликовать</button>
    </form>
}

const MyPostsForm = reduxForm({
    form: 'myPosts'
})(Form)


export default MyPosts;