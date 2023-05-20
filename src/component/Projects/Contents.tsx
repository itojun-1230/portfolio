//mui
import { Box } from "@mui/material";
//component
import { ProjectTag } from "./ProjectTag";
//css
import styles from "./project.module.css";

export const Content = (props: {
  name: string,
  tag: string[],
  description: string[],
  objective: string[],
  src: string,
  URL?: string
}) => {

  const onClickURL = (URL: string) => {
    const res = confirm(`${URL}\nこちらのURLにアクセスします\nよろしいですか？`);
    if( res ) {
      open(URL);
    }
  }

  return (
    <Box className={styles.ProjectBox}>
      <p className={styles.ProjectName}>{props.name}</p>
      <Box className={styles.ProjectLayout}>
        <Box className={styles.ProjectBlock}>
          <Box className={styles.ProjectTagBox}>
            {props.tag.map((e, i) => {
              return (
                <ProjectTag key={i} tag={e} />
              )
            })}

          </Box>
          {props.description.map((e, i) => {
            return (
              <p key={i} style={{ margin: "10px" }}>{e}</p>
            )
          })}
          <p className={styles.objective}>目的</p>
          {props.objective.map((e, i) => {
            return (
              <p key={i}>&#9642;{e}</p>
            )
          })}

          {props.URL && (
            <p className={styles.ProjectURL}
              onClick={() => onClickURL(props.URL!)}
            >
              {props.URL}
              </p>
          )}
        </Box>
        <Box className={styles.ProjectBlock}>
          <img className={styles.ProjectImage} src={props.src} />
        </Box>
      </Box>
    </Box>
  )
}