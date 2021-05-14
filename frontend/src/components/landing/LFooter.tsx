import React from "react";
import styles from "../../assets/scss/landing/lfooter.module.scss";
import { booksData } from "../../constants/booksData";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const LFooter = ()=>{
  const renderBooks = ()=>{
    let books:any[] = [];
    booksData.map((book)=>{
      books.push(
        <div className={styles.card}>
          <div>
            <div className={styles.bHeader}><span>{book.header}</span></div>
            <div className={styles.sHeader}><span>{book.secondaryHeader}</span></div>
          </div>
          <div style={{ display: "flex",justifyContent: "space-between" }}>
            <div className={styles.qty}><span>{book.qty}</span></div>
            <div className={styles.detailButton}>
              {book.add ? (<div style={{ display: "flex" }}><LocalMallOutlinedIcon fontSize={"small"} style={{ color: "#3560b9",marginRight: "0.25rem" }}/><span>Add</span></div>) : null}
              <span>View Details</span>
            </div>
          </div>
        </div>
      );
    });
    return books;
  };
  return(
    <div className={styles.main}>
      <div className={styles.header}><span>More Books</span></div>
      <div className={styles.cardContainer}>
        {renderBooks()}
      </div>
      <div className={styles.button}><span>View All Books</span></div>
    </div>
  );
};
export default LFooter;
