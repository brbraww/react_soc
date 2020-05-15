import React from "react";
import userPhoto from "../../assets/img/user.png";
import classes from "./Users.module.css";


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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                             className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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