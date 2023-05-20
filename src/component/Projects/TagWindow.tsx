//mui
import { Box } from "@mui/material";
//component
import { TagButton } from "./Tag";
//css
import styles from "./project.module.css";

export const TagWindow = (props: {
  tag: ProjectTag,
  setTag: React.Dispatch<React.SetStateAction<ProjectTag>>
}) => {

  return (
    <Box id={styles.TagBox}>
      <Box>
      <p>制作時期</p>
        <TagButton
          name={"高校"} state={props.tag.HighSchool}
          setState={() => props.setTag((ref) => { return { ...ref, HighSchool: !ref.HighSchool } })}
        />
        <TagButton
          name={"大学"} state={props.tag.University}
          setState={() => props.setTag((ref) => { return { ...ref, University: !ref.University } })}
        />
      </Box>
      <Box>
      <p>使用技術</p>
        <TagButton
          name={"JavaScript"} state={props.tag.JavaScript}
          setState={() => props.setTag((ref) => { return { ...ref, JavaScript: !ref.JavaScript } })}
        />
        <TagButton
          name={"HTML・CSS"} state={props.tag.HTMLcss}
          setState={() => props.setTag((ref) => { return { ...ref, HTMLcss: !ref.HTMLcss } })}
        />
        <TagButton
          name={"TypeScript"} state={props.tag.TypeScript}
          setState={() => props.setTag((ref) => { return { ...ref, TypeScript: !ref.TypeScript } })}
        />
        <TagButton
          name={"Node.js"} state={props.tag.Nodejs}
          setState={() => props.setTag((ref) => { return { ...ref, Nodejs: !ref.Nodejs } })}
        />
        <TagButton
          name={"React"} state={props.tag.React}
          setState={() => props.setTag((ref) => { return { ...ref, React: !ref.React } })}
        />
        <TagButton
          name={"SQL"} state={props.tag.SQL}
          setState={() => props.setTag((ref) => { return { ...ref, SQL: !ref.SQL } })}
        />
        <TagButton
          name={"Python"} state={props.tag.Python}
          setState={() => props.setTag((ref) => { return { ...ref, Python: !ref.Python } })}
        />
      </Box>
    </Box>
  )
}

export type ProjectTag = {
  HighSchool: boolean,
  University: boolean,
  JavaScript: boolean,
  HTMLcss: boolean,
  TypeScript: boolean,
  Python: boolean,
  Nodejs: boolean,
  SQL: boolean,
  React: boolean
}