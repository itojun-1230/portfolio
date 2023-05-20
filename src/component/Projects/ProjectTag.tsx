//mui
import { Box } from "@mui/material";
//css
import styles from "./project.module.css";

export const ProjectTag = (props: {
  tag: string
}) => {
  return (
    <Box className={styles.ProjectTag}>
      <p>{props.tag}</p>
    </Box>
  )
}