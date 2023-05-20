//library
import { useState } from "react"
//component
import { ProjectTag, TagWindow } from "@/component/Projects/TagWindow";
import { Content } from "@/component/Projects/Contents";
//json
import JsonData from "@/json/Project.json";

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
    });
    const [Projects] = useState<ProjectJsonType[]>(JsonData["Projects"]);

    return (
        <>
            <h1 style={{ marginLeft: "40px" }}>PROJECT</h1>
            <TagWindow tag={Tag} setTag={setTag} />
            {Projects.map((e, i) => {
                if (TagProcess(e.tag, e.season, Tag)) {
                    return (
                        <Content key={i}
                            name={e.name} tag={e.tag}
                            description={e.description}
                            objective={e.objective}
                            src={`${import.meta.env.BASE_URL}ProjectImage/${e.src}`}
                            URL={e.URL}
                        />
                    )
                }
            })}
        </>
    )
}

type ProjectJsonType = {
    name: string,
    season: string,
    tag: string[],
    description: string[],
    objective: string[],
    src: string,
    URL?: string
}

const TagProcess = (thisTag: string[], season: string, tag: ProjectTag) => {
    if (tag.HighSchool && season == "HighSchool" ) {
    } else if (tag.University && season == "University" ) {
    } else {
        return false;
    }

    if (tag.JavaScript && thisTag.includes("JavaScript")) {
        return true;
    } else if (tag.HTMLcss && thisTag.includes("HTML・CSS")) {
        return true;
    } else if (tag.TypeScript && thisTag.includes("TypeScript")) {
        return true;
    } else if (tag.JavaScript && thisTag.includes("JavaScript")) {
        return true;
    } else if (tag.Nodejs && thisTag.includes("Nodejs")) {
        return true;
    } else if (tag.React && thisTag.includes("React")) {
        return true;
    } else if (tag.React && thisTag.includes("SQL")) {
        return true;
    } else if (tag.React && thisTag.includes("Python")) {
        return true;
    } else {
        return false;
    }
}