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


class UsersCont extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
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
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        UsersData: state.UsersPage.UsersData,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        isFollowingInProgress: state.UsersPage.isFollowingInProgress,
    };
}

const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setCurrentPage,
        toggleIsFollowingInProgress, getUsers
    })(UsersCont);

export default UsersContainer;