import React from "react";
import classes from "./paginator.module.css";


let Paginator = ({totalUsersCount,pageSize, currentPage,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={classes.pages}>
            {
                pages.map(p => {
                    return <span className={currentPage === p && classes.selectedPage}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })
            }
        </div>
    </div>
}


export default Paginator;