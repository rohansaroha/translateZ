import React, { useEffect, useState } from "react";
import { accordionData } from "../../constants/accordionData";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "../../assets/scss/landing/lAccordion.module.scss";

const LAccordion = ()=>{
  const [imgSrc,setImgSrc] = useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(()=>{
    if(accordionData.length > 0){
      setImgSrc(accordionData[0].imgSrc);
      setExpanded(accordionData[0].id);
    }
  },[]);

  const renderAccordions = ()=>{
    let accordions:any[] = [];
    let content:any = [];
    accordionData.map((accordion)=>{
      accordions.push(
        <Accordion expanded={expanded === accordion.id} onChange={handleChange(accordion.id)} key={accordion.id}>
          <AccordionSummary
            onClick={()=>setImgSrc(accordion.imgSrc)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ padding: "0.5rem 1rem" }}
          >
            <div className={styles.accHeader} >{accordion.header}</div>
          </AccordionSummary>
          <AccordionDetails style={{ display: "flex",alignItems: "center" }}>
            <img className={styles.accImg} src={accordion.imgSrc} alt='img'/>
            <div className={styles.accDescription}>{accordion.description}</div>
          </AccordionDetails>
        </Accordion>
      );
    });
    content.push(
      <div className={styles.content}>
        <div className={styles.accBox}>
          {accordions}
        </div>
        <div className={styles.imgBox}>
          <img className={styles.contentImg} src={imgSrc} alt='img-box'/>
        </div>
      </div>
    );
    return content;
  };

  return(
    <div className={styles.main}>{renderAccordions()}</div>
  );
};
export default LAccordion;
