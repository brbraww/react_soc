import React from "react";
import userPhoto from "../../../assets/img/user.png";
import classes from "../Users.module.css";
import {NavLink} from "react-router-dom";


let User = ({user, isFollowingInProgress, follow, unfollow}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);
                                      }}>
                                Unfollow</button>
                            : <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>
                                Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div><div>{user.status}</div>
                    </span>
                </span>
        </div>
    )
}

export default User;