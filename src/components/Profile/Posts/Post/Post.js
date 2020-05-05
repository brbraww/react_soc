import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={ classes.post }>
            <div className={classes.avatar}>
                <img src="https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1" alt=""/>
            </div>
            <div className={ classes.record }>
                <p className={classes.text}>{ props.text }</p>
                <p className={classes.like}>Like: {props.likesCount}</p>

            </div>
        </div>
    );
}

export default Post;