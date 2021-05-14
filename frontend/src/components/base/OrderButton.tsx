import React, { useContext } from "react";
import { OrderContext } from "../../hooks/OrderContext";
import styles from "../../assets/scss/base/orderButton.module.scss";

const OrderButton = ()=>{
  const qty = useContext(OrderContext);
  return(
    <div className={styles.main}>
      <div onClick={()=>{qty[0] > 0 ? (qty[1](qty[0] - 1)) : null;}}
        className={styles.minus}>
        <span>-</span>
      </div>
      <div className={styles.qty}>
        <span>{qty}</span>
      </div>
      <div onClick={()=>qty[1](qty[0] + 1)}
        className={styles.plus}>
        <span>+</span>
      </div>
    </div>
  );
};

export default OrderButton;
