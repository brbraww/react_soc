import classes from "./UserInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const UserInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let templateUrl = 'https://www.'
    return (
        <div>
            <div className={ classes.top }>
                <img src='http://alp.org.ua/wp-content/uploads/2012/07/artleo.com_21593.jpg' alt=""/>
            </div>
            <div className={ classes.user_info }>
                <div className={ classes.avatar }>
                    <img src={props.profile.photos.large} alt="avatar"/>
                </div>
                <div className={ classes.description }>
                    <div className={classes.fullName}>
                        <h2>{props.profile.fullName}</h2>
                    </div>
                    <div className={classes.status}>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                    <div className={classes.job}>

                        <p>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу' }</p>
                        <i>{props.profile.lookingForAJobDescription}</i>
                    </div>
                    <div className={classes.contacts}>
                        <p>Контактная информация:</p>
                        {props.profile.contacts.facebook
                            ? <p><a href={templateUrl+props.profile.contacts.facebook}>facebook</a></p>
                            : null
                        }
                        {props.profile.contacts.vk
                            ? <p><a href={templateUrl+props.profile.contacts.vk}>vk</a></p>
                            : null
                        }
                        {props.profile.contacts.instagram
                            ? <p><a href={templateUrl+props.profile.contacts.instagram}>instagram</a></p>
                            : null
                        }
                        {props.profile.contacts.github
                            ? <p><a href={templateUrl+props.profile.contacts.github}>github</a></p>
                            : null
                        }
                        {props.profile.contacts.youtube
                            ? <p><a href={templateUrl+props.profile.contacts.youtube}>youtube</a></p>
                            : null
                        }
                        {props.profile.contacts.tweeter
                            ? <p><a href={templateUrl+props.profile.contacts.tweeter}>tweeter</a></p>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserInfo;