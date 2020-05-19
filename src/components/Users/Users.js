import React from "react";
import userPhoto from "../../assets/img/user.png";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    //for (let i=1; i <= pagesCount; i++) {
    for (let i=1; i <= 23; i++) {
        pages.push(i)
    }
    return <div>
        {
            props.UsersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.isFollowingInProgress.some(id=>id === u.id)} onClick={() => {
                                props.toggleIsFollowingInProgress(true,u.id);
                                usersAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleIsFollowingInProgress(false,u.id);
                                });
                            }}>Unfollow</button>
                            : <button disabled={props.isFollowingInProgress.some(id=>id === u.id)} onClick={() => {
                                props.toggleIsFollowingInProgress(true,u.id);
                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleIsFollowingInProgress(false,u.id);
                                });
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>

                </span>
            </div>)
        }
        <div className={classes.pages}>
            {
                pages.map( p => {
                    return <span className={ props.currentPage === p && classes.selectedPage }
                                 onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })
            }
        </div>
    </div>
}
export default Users;