//library
import { useState } from "react"
//component
import { ProjectTag, TagWindow } from "@/component/Projects/TagWindow";
//

export const ProjectPage = () => {

    const [Tag, setTag] = useState<ProjectTag>({
        HighSchool: true,
        University: true,
        JavaScript: true,
        HTMLcss: true,
        TypeScript: true,
        Python: true,
        Nodejs: true,
        SQL: true,
        React: true
    })

    return (
        <>
            <h1 style={{ marginLeft: "40px" }}>PROJECT</h1>
            <TagWindow tag={Tag} setTag={setTag} />
        </>
    )
}