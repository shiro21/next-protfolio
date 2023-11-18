import { NotionProps } from "@/pages/api/interface";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ data }: { data: NotionProps }) {

    const { external } = data.cover;
    const { Description, WorkPeriod, Name, Tag, GitHubLink } = data.properties;

    const startArray = WorkPeriod.date.start.split('-');
    const endArray = WorkPeriod.date.end.split('-');
    let startDate = new Date(Number(startArray[0]), Number(startArray[1]), Number(startArray[2]));
    let endDate = new Date(Number(endArray[0]), Number(endArray[1]), Number(endArray[2]));
    const diff = Math.abs(Number(endDate) - Number(startDate));
    const result = diff / (1000 * 60 * 60 * 24);

    return (
        <div className="flex flex-col p-6 bg-card-primary rounded-md m-3">
            <Image layout="responsive" objectFit="" src={external.url} width="100" height="100" alt="이미지" />
            <h1>{Name.rich_text[0].plain_text}</h1>
            <p>{Description.rich_text[0].plain_text}</p>
            <span>날짜: {WorkPeriod.date.start} ~ {WorkPeriod.date.end} | <span>총 기간: {result}일</span></span>
            <ul className="flex">
                <li style={{paddingRight: "4px"}}>태그: </li>
                {
                    Tag.multi_select.map((tag, index) => (
                        <li key={index} style={{color: tag.color, paddingRight: "4px"}}>{tag.name}</li>
                    ))
                }
            </ul>
            <span>
                Git Link: 
                {
                    GitHubLink.url ? <Link href={GitHubLink.url} target="_blank"> {GitHubLink.url}</Link> : <span> 등록된 주소가 없습니다.</span>
                } 
            </span>
        </div>
    );
}