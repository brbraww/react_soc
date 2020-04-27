import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={ classes.post }>
            <div className={classes.avatar}>
                <img src="https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1" alt=""/>
            </div>
            <div className={ classes.text }>
                { props.message }
            </div>
        </div>
    );
}

export default Post;