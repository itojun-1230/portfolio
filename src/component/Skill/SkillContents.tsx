//mui
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
//css
import styles from "./skill.module.css";

export const SkillTable = (props: {
  skill: SkillType[],
  title: string,
  ElemRef: React.RefObject<HTMLElement>
}) => {
  return (
    <Box ref={props.ElemRef} sx={{margin: "20px 10%"}}>
      <p className={styles.TableTitle}>{props.title}</p>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell align="center">技術</TableCell>
            <TableCell align="center">経緯</TableCell>
            <TableCell align="center">スキル</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.skill.map((e, i) => {
            return (
              <TableRow key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="center">{e.history[0]}<br />{e.history[1]}</TableCell>
                <TableCell align="right">{"★".repeat(e.skill) + "☆".repeat(5 - e.skill)}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Box>
  )
}

export const ListContent = (props: {
  skill: string[],
  title: string,
  ElemRef: React.RefObject<HTMLElement>
}) => {
  return (
    <Box ref={props.ElemRef} sx={{margin: "20px 10%"}}>
      <p className={styles.TableTitle}>{props.title}</p>
      <p>{props.skill.join(" 、 ")}</p>
    </Box>
  )
}

export const CertificationTable = (props: {
  list: CertificationType[],
  ElemRef: React.RefObject<HTMLElement>
}) => {
  return (
    <Box ref={props.ElemRef} sx={{marginLeft:"5%", marginRight:"5%",width: "fit-content"}}>
      <p className={styles.TableTitle}>資格・検定</p>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell align="center">技術</TableCell>
            <TableCell align="center">年</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((e, i) => {
            return (
              <TableRow key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="right">{e.year}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Box>
  )
}

export type SkillType = {
  name: string,
  skill: number,
  history: string[]
}
export type CertificationType = {
  name: string,
  year: number
}