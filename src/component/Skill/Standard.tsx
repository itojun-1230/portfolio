//mui
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
//css
import styles from "./skill.module.css";

const Standard: string[] = [
  "実行できる",
  "基礎的なことを理解している",
  "なにかを開発することができる",
  "作品を開発することができる",
  "実務的な開発ができる"
];

export const SkillStandard = () => {
  return (
    <Box>
      <p className={styles.SkillTitle}>スキル</p>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">自己評価</TableCell>
            <TableCell align="center">基準</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Standard.map((e, i) => {
            return (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{"★".repeat(i + 1) + "☆".repeat(4 - i)}</TableCell>
                <TableCell align="left">{e}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ Box>
  )
}