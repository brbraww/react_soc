import React from "react";
import classes from './Users.module.css'

const Users = (props) => {
    if (props.UsersData.length === 0) {
        props.setUsers([
            {id:1, photoUrl: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif',
                followed: true, fullName: 'Amidomaru', status: 'joj', location: {country: 'Japan', city: 'Tokio'}},
            {id:2, photoUrl: 'https://cn.i.cdn.ti-platform.com/content/534/showpage/%D1%8E%D0%BD%D1%8B%D0%B5-%D1%82%D0%B8%D1%82%D0%B0%D0%BD%D1%8B-%D0%B2%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%21/ru/ttg-200x200.png',
                followed: true, fullName: 'Yo', status: 'YOYO', location: {country: 'none', city: 'none'}},
            {id:3, photoUrl: 'https://s3-us-west-1.amazonaws.com/co-directory-images/barney-stinson-fca-7a33138.jpg',
                followed: false, fullName: 'Barney', status: 'legendary', location: {country: 'USA', city: 'New York'}},
        ])
    }
    return <div>
        {
            props.UsersData.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="avatar" className={classes.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div><div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;