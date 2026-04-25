import React from "react";
import { AccessIcon, CSharpIcon, CSSIcon,FlutterIcon, HtmlIcon, JavaIcon, JavaScriptIcon, MysqlIcon, NodeIcon, Prisma, ReactIcon, ReduxIcon, TypescriptIcon, ViteIcon, WordPressIcon } from "../../../public/svg-logos/svg-icons";

export interface TecnologiesInterface {
    id: number,
    name: string,
    icon: React.ReactNode;
}

export const TecnologiesList: TecnologiesInterface[] = [
    {
        id: 1,
        name: "HTML",
        icon: <HtmlIcon height={50} width={50} />, 
    },
    {
        id: 2,
        name: "CSS",
        icon: <CSSIcon height={50} width={50} />,
    },
    {
        id: 3,
        name: "Java",
        icon: <JavaIcon height={50} width={50} />,
    },
    {
        id: 4,
        name: "C#",
        icon: <CSharpIcon height={50} width={50} />,
    },
    {
        id: 5,
        name: "JavaScript",
        icon: <JavaScriptIcon height={50} width={50}/>,
    },
    {
        id: 6,
        name: "Access",
        icon: <AccessIcon height={50} width={50}/>,
    },
    {
        id: 7,
        name: "Mysql",
        icon: <MysqlIcon height={50} width={50}/>,
    },
    {
        id: 8,
        name: "Node",
        icon: <NodeIcon height={50} width={50}/>,
    },
    {
        id: 9,
        name: "React",
        icon: <ReactIcon height={50} width={50}/>,
    },
    {
        id: 10,
        name: "Typescript",
        icon: <TypescriptIcon height={50} width={50}/>,
    },
    {
        id: 11,
        name: "Vite",
        icon: <ViteIcon height={50} width={50}/>,
    },
    {
        id: 12,
        name: "WordPress",
        icon: <WordPressIcon height={50} width={50}/>,
    },
    {
        id: 13,
        name: "Flutter",
        icon: <FlutterIcon height={50} width={50}/>,
    },
    {
        id: 14,
        name: "Redux",
        icon: <ReduxIcon height={50} width={50} />,
    }
    ,{
        id: 15,
        name: "Prisma",
        icon: <Prisma height={50} width={50} style={{ fill: "#0c344b" }}/>,
    },

];

