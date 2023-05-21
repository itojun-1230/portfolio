//library
import { useRef } from 'react';
//mui
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import TableChartIcon from '@mui/icons-material/TableChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EditIcon from '@mui/icons-material/Edit';
//component
import { SkillDescription } from "@/component/Skill/SkillDes"
import { ContentIndex } from '@/component/Skill/ContentIndex';
//type
import { ListType } from '@/component/Skill/Navi';

const ListItems: ListType[] = [
  {
    name: "フロントエンド",
    icon: WebIcon
  },
  {
    name: "バックエンド",
    icon: StorageIcon
  },
  {
    name: "プログラミング言語",
    icon: TerminalIcon
  },
  {
    name: "データベース",
    icon: TableChartIcon
  },
  {
    name: "その他",
    icon: MoreHorizIcon
  },
  {
    name: "学習",
    icon: EditIcon
  },
  {
    name: "資格・検定",
    icon: EmojiEventsIcon
  }
];

export const SkillPage = () => {
  const RefElement: React.RefObject<HTMLElement>[] = [...new Array(7)].map(() => useRef<HTMLElement>(null));
  
  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>SKILL</h1>
      <SkillDescription refs={RefElement} Items={ListItems} />
      <ContentIndex refs={RefElement} />
    </>
  )
}