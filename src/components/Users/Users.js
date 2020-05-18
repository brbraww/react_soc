import React from "react";
import userPhoto from "../../assets/img/user.png";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY":'48d27174-95eb-4258-826a-c0656d2c3fa8'},
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY":'48d27174-95eb-4258-826a-c0656d2c3fa8'},
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });
                                props.follow(u.id);
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