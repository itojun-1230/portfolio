//mui
import { Box } from "@mui/material"
//component
import { CertificationTable, ListContent, SkillTable } from "./SkillContents"
//json
import JsonData from "@/json/Skill.json";
//css
import styles from "./skill.module.css";
export const ContentIndex = (props:{
  refs: React.RefObject<HTMLElement>[],
  
}) => {
  return (
    <>
    <Box className={styles.SkillTables}>
        <SkillTable ElemRef={props.refs[0]} skill={JsonData["FrontEnd"]} title={"フロントエンド"} />
        <SkillTable ElemRef={props.refs[1]} skill={JsonData["BackEnd"]} title={"バックエンド"} />
        <SkillTable ElemRef={props.refs[2]} skill={JsonData["Programming"]} title={"プログラミング言語"} />
        <SkillTable ElemRef={props.refs[3]} skill={JsonData["DataBase"]} title={"データベース"} />
      </ Box>
      <Box className={styles.SkillTables}>
        <ListContent ElemRef={props.refs[4]} skill={JsonData["Other"]} title={"その他"} />
        <ListContent ElemRef={props.refs[5]} skill={JsonData["Learning"]} title={"学習"} />
      </ Box>
      <Box className={styles.SkillTables}>
        <CertificationTable ElemRef={props.refs[6]} list={JsonData["Certification"]} />
      </ Box>
    </>
  )
}