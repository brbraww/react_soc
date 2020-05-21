import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {
    let PostsItems = props.PostsData.map( (p) => <Post id={p.id} text={ p.text } likesCount={p.likesCount} /> );

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={ classes.all }>

            <AddPostFormRedux onSubmit={addNewPost} />
            <div className={ classes.posts }>
                {PostsItems}
            </div>

        </div>
    );
}
const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={ classes.addPost }>
            <div><Field
                component={'textarea'}
                name={'newPostText'}
                placeholder='Enter new post'
            />
            </div>
            <div><button>Add post</button></div>
        </form>
    )
}
/*class AddNewPostForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={classes.addPost}>
                <div>
                    <Field
                        component={'textarea'}
                        name={'newPostText'}
                        placeholder='Enter new post'
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }
}*/
const AddPostFormRedux = reduxForm({form:'postsAddNewPostForm'})(AddNewPostForm)

export default Posts;