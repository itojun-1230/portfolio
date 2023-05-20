//mui
import { Button } from "@mui/material"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
//css
import styles from "./project.module.css";

export const TagButton = (props: {
  name: string,
  state: boolean,
  setState: Function
}) => {
  return (
    <Button variant="outlined" 
      className={styles.TagButton}
      style={{
        textTransform: "none"
      }}
      startIcon={props.state ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      onClick={() => props.setState()}
    >
    {props.name}
    </Button>
  )
}