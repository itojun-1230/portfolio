//mui
import { ReactNode } from "react";
import { Box } from "@mui/material";
//css
import styles from "./main.module.css";

export const MainContents = (props:{
  children: ReactNode
}) => {
  return (
    <Box id={styles.main}>
      {props.children}
    </Box>
  )
}