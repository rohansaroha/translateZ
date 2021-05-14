import React from "react";
import styles from "../../assets/scss/landing/lFooter.mobile.module.scss";
import { booksData } from "../../constants/booksData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LFooterM = ()=>{
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
              {book.add ? (<span>a</span>) : null}
              <span>View Details</span>
            </div>
          </div>
        </div>
      );
    });
    return books;
  };
  let settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return(
    <div className={styles.main}>
      <div style={{ display: "flex",justifyContent: "space-between",padding: "1rem 1.5rem" }}>
        <div className={styles.header}><span>More Books</span></div>
        <div className={styles.button}><span>View All Books</span></div>
      </div>
      <Slider {...settings} className={styles.cardContainer}>
        {renderBooks()}
      </Slider>
    </div>
  );
};
export default LFooterM;
