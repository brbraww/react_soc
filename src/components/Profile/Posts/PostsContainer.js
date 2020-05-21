import {addPostActionCreator} from "../../../redux/Profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsData,
        NewPostText: state.ProfilePage.NewPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;