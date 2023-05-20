//library
import { ReactNode, useState } from "react";
//mui
import { Button, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";
//css
import styles from "./header.module.css";

export const HeaderButton = (props:{
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
  path: string,
  children: ReactNode
}) => {

  const [ Root ] = useState<string>(location.href.split("/").slice(0, 4).join("/"));
  
  return (
    <Button 
      id={styles.Header_Button}
      onClick={() => location.href = `${Root}/${props.path}`}
      >
      <props.icon />
      {props.children}
    </Button>
  )
}