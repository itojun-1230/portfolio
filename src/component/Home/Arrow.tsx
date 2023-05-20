//library
import { useState } from "react";
//mui
import { Box } from "@mui/material";
//css
import styles from "./home.module.css";

export const ArrowBox = () => {

  const [ Root ] = useState<string>(location.href.split("/").slice(0, 4).join("/"));

  return (
    <Box id={styles.ArrowBox}>
      <Box id={styles.Arrow} />
      <Box id={styles.ArrowText}>
          <p 
          className={styles.Arrow_Text1} onClick={() => location.href = `${Root}/project`}
          >&#62;PROJECT</p>
          <p
          className={styles.Arrow_Text2}
          >&#9642;制作物</p>
          <p 
          className={styles.Arrow_Text1} onClick={() => location.href = `${Root}/tech`}
          >&#62;TECH</p>
          <p
          className={styles.Arrow_Text2}
          >&#9642;学んだ技術等</p>
      </Box>
    </Box>
  )
}