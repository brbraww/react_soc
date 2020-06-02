import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingInProgress,
    unfollow
} from "../../redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching, getIsFollowingInProgress,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsersData,
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (currentPage) => {
        const {pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   UsersData={this.props.UsersData}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   portionSize={this.props.portionSize}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        UsersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        portionSize: getPortionSize(state)
    };
}

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage,
            toggleIsFollowingInProgress, getUsers
        }),
    //withAuthRedirect,
)(UsersContainer);