import React from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { required, maxLength30, Textarea } from '../../../utils/validators';
import Button from '@material-ui/core/Button'
import PostCard from './PostCard'


const MyPosts = (props) => {

    let PostsElements = props.posts.map((post, key) => 
    <PostCard message={post.message} author={post.author} key={key} likesCount={post.likesCount} />);
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