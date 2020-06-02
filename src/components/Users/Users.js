import React from "react";
import Paginator from "../common/Paginator/paginator";
import User from "./User/User";


let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,UsersData,portionSize,...props}) => {
    return <div>
        {
            UsersData.map(u => <User user={u}
                                     key={u.id}
                                     isFollowingInProgress={props.isFollowingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
            />)
        }
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            portionSize={portionSize}
        />
    </div>
}
export default Users;