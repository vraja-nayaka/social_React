import React from 'react';
import style from '../profile.module.css';
import { Field, reset, reduxForm } from 'redux-form';
import { required, maxLength30, Textarea } from '../../../utils/validators';
import Button from '@material-ui/core/Button'


const Post = (props) => {
    return <div className={style.post}>
        <img alt='profile' src="https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg"></img>
        <a href="/">{props.message}</a>
        {props.likesCount} likes
  </div>
};

const MyPosts = (props) => {

    let PostsElements = props.posts.map((post, key) => <Post message={post.message} key={key} likesCount={post.likesCount} />);
    let addPost = (values) => {
        props.addPost(values.newPostText);
    };
    return <div>
        <h3>My posts</h3>
        <MyPostsForm onSubmit={addPost}/>
        <div> {PostsElements.reverse()} </div>
    </div>
};


const Form = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            name="newPostText"
            component={Textarea}
            validate={[required, maxLength30]}
            label="Отправить новый пост"
            type="text"
            placeholder="Введите текст поста">
        </Field>
        <Button type="submit" variant="contained" color="primary" >Опубликовать</Button>
    </form>
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('myPosts'));

const MyPostsForm = reduxForm({
    form: 'myPosts',
    onSubmitSuccess: afterSubmit
})(Form)

export default MyPosts;