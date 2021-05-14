import React from "react";
import styles from "../../assets/scss/landing/lHeader.module.scss";
import OrderButton from "../base/OrderButton";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { productDetailsData } from "../../constants/productDetailsData";
import DoneIcon from "@material-ui/icons/Done";

const LHeader = () => {
  const renderCardDetails = ()=>{
    let productDetails:any[] = [];
    productDetailsData.map((data)=>{
      productDetails.push(
        <div key={data.id}>
          <DoneIcon style={{ color: "green" }} fontSize={"small"}/>
          <span className={styles.pHeader}>{data.header}:</span>
          <span className={styles.sHeader}>{data.secondaryHeader}</span>
          <div className={styles.border}/>
        </div>
      );
    });
    return productDetails;
  };
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.details}>
          <div className={styles.header}><span>Zero to One</span></div>
          <div className={styles.text}>
            <span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
                The next Bill Gates will not build an operating system. The next Larry Page or Sergey Brin won't make a search engine. If you are copying these guys, you are'nt learning from them. It's easier to copy a model than to make something new.
            </span>
          </div>
        </div>
        <div className={styles.card}>
          {renderCardDetails()}
          <div style={{ display: "flex",justifyContent: "space-between",margin: "1rem 0",alignItems: "center" }}>
            <span style={{ color: "green",fontWeight: "bold" }}>120</span>
            <OrderButton/>
          </div>
          <div className={styles.add}>
            <LocalMallIcon color={"secondary"} fontSize={"small"} style={{ marginRight: "0.4rem" }}/>
            <span>Add to Basket</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LHeader;
