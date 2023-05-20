//library
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
//css
import styles from "./home.module.css";

const OriginText: string[] = ["fukuyamadaigaku;","kougakubu jouhoukougakka;","itou junpei;"];
const EnglishText: string[] = ["Fukuyama University","Faculty of Engineering  Department of Computer Science", "Ito Junpei"];

export const SelfIntroduction = () => {

    const [Text, setText] = useState<string>("/0/0");

    const SecondFunc = () => {
        setText(ref => {
            const RefSplit: string[] = ref.split("/");    //"/"で分割 0=text部 1=index部 2=行部
            const RefText: string = RefSplit[0];
            const [ Index, Row ] :number[] = RefSplit.slice(1).map(Number);

            if(Index < OriginText[Row].length) {   //index+1が元textの長さ未満の場合繰り返す
                setTimeout(SecondFunc, 75);

                return `${TextConvert(RefText + OriginText[Row][Index])}/${Index + 1}/${Row}`;
            }else if(Row < OriginText.length - 1) {
                setTimeout(SecondFunc, 75);

                return `${TextConvert(RefText + "\n" + OriginText[Row + 1][0])}/1/${Row + 1}`;
            }else {
                return ref;
            }

        });

        
    }
    useEffect(() => {
        if(Number(Text.split("/")[2]) < OriginText.length) {
            SecondFunc();
        }
    }, [])
    

    return (
        <Box className={styles.TextBox}>
            {Text.split("/")[0].split("\n").map((text, i) => {
                return (
                  <Box key={i}>
                    <p className={styles.SelfText}>{text.replace(";", "")}</p>
                    {text.slice(-1) == ";" && (
                      <p className={styles.EnglishText}>{EnglishText[i]}</p>
                    )}
                  </ Box>
                )
            })}
        </ Box>
    )
}

const TextConvert = (text: string) => {
  return text
  .replace("ふくやまだいがく","福山大学")
  .replace("こうがくぶ","工学部")
  .replace("じょうほうこうがっか","情報工学科")
  .replace("いとう","伊藤")
  .replace("じゅんぺい","潤平")
  .replace("fu","ふ")
  .replace("ku","く")
  .replace("ya","や")
  .replace("da","だ")
  .replace("ga","が")
  .replace("ma","ま")
  .replace("ko","こ")
  .replace("bu","ぶ")
  .replace("jo","じょ")
  .replace("ho","ほ")
  .replace("kka","っか")
  .replace("to","と")
  .replace("ju","じゅ")
  .replace("pe","ぺ")
  .replace("i","い")
  .replace("u","う")
  .replace(/([n])([A-Za-z])/,"ん$2");
}