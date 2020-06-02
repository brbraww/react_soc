import React, {useState} from "react";
import classes from "./paginator.module.css";


let Paginator = ({totalItemsCount,pageSize, currentPage,onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div>
        <div className={classes.pages}>
            { portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Назад</button>}
            {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                    return <span className={currentPage === p && classes.selectedPage}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })
            }
            { portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Вперёд</button>}
        </div>
    </div>
}


export default Paginator;