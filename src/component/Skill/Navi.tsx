//mui
import { List, ListItem, ListItemButton, ListItemIcon, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
//css
import styles from "./skill.module.css";

export type ListType = {
  name: string,
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}


export const SkillNavi = (props: {
  Items: ListType[],
  refs: React.RefObject<HTMLElement>[]
}) => {
  return (
    <List>
      <p className={styles.SkillTitle}>ナビゲーション</p>
      {props.Items.map((e, i) => {
        return (
          <ListItem disablePadding key={i}>
            <ListItemButton className={styles.NaviButton}
              onClick={() => props.refs[i].current?.scrollIntoView({
                  behavior : 'smooth',
                  block    : 'center'
              })}>
              <ListItemIcon>
                <e.icon />
              </ListItemIcon>
              <p className={styles.NaviButtonText} >{e.name}</p>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}