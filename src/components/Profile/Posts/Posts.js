import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLenghtCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const Posts = React.memo(props => {
    let PostsItems = [...props.PostsData]
        .reverse()
        .map((p) => <Post key={p.id} id={p.id} text={p.text} likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.all}>

            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {PostsItems}
            </div>

        </div>
    );
});

const maxLenght10 = maxLenghtCreator(10)
const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={ classes.addPost }>
            <div><Field
                component={Textarea}
                name={'newPostText'}
                placeholder='Enter new post'
                validate={[requiredField, maxLenght10]}
            />
            </div>
            <div><button>Add post</button></div>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('postsAddNewPostForm'));
const AddPostFormRedux = reduxForm({form:'postsAddNewPostForm', onSubmitSuccess: afterSubmit})(AddNewPostForm)

export default Posts;