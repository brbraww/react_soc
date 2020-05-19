import React from "react";
import Profile from "./Profile";
import {getUserProfile, setUserProfile} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div >
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(withUrlDataContainerComponent);