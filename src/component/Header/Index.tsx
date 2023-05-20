//mui
import { Box } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import HandymanIcon from '@mui/icons-material/Handyman';
//component
import { HeaderButton } from "./HeaderButton";
//css
import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <Box id={styles.Header} >
        <HeaderButton icon={HomeIcon} path={""} ><p>Home</p></HeaderButton>
        <HeaderButton  icon={WorkIcon}path={"project"} ><p>Project</p></HeaderButton>
        <HeaderButton  icon={HandymanIcon} path={"tech"}><p>Tech</p></HeaderButton>
      </Box>
      <Box id={styles.Header_space} />
    </>
  )
}