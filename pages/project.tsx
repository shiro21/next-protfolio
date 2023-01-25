import ProjectItem from "@/components/projects/project-item";
import Seo from "@/components/seo";
import { DB_ID, TOKEN } from "@/config";
import { Client } from "@notionhq/client";


export default function Projects({ projectItem }: { projectItem: [] }) {

    return (
        <div className="flex flex-col items-center justify-center">
            <Seo title="프로젝트" />
            <h1 className="text-4xl font-bold sm:text-6xl">프로젝트 : {projectItem.length}</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 py-10 gap-2 w-full">
                {
                    projectItem.map((data, index) => (
                        <ProjectItem key={index} data={data} />
                    ))
                }
            </section>
        </div>

    );
}

export async function getStaticProps() {

    // https://developers.notion.com/reference/authentication
    const notion = new Client({ auth: TOKEN });

    const query = await notion.databases.query({
        database_id: DB_ID || "",
        sorts: [
            {
                "timestamp": "created_time",
                "direction": "ascending"
            }
        ]
    })

    const projectItem = query.results.map((item) => (
        item
    ))

    return {
        props: {
            projectItem
        }
    }
}