//component
import { LengthBox } from "@/component/Home/Length"
import { Gear } from "@/component/Home/Gear"
import { SelfIntroduction } from "@/component/Home/SelfIntro"

export const HomePage = () => {

    

    return (
        <>
            <SelfIntroduction />
            <LengthBox />
            <Gear />
        </>
    )
}