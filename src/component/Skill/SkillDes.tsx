//mui
import { Box } from "@mui/material"
//component
import { SkillStandard } from "./Standard";
import { ListType, SkillNavi } from "./Navi";
//css
import styles from "./skill.module.css";

export const SkillDescription = (props:{
  Items: ListType[],
  refs: React.RefObject<HTMLElement>[]
}) => {
  return (
    <Box className={styles.DescriptionBox}>
        <SkillStandard />
        
        <SkillNavi refs={props.refs} Items={props.Items} />
    </Box>
  )
}