export interface NotionProps {
    cover: {
        external: {
            url: string
        }
        type: string,
    }
    properties: {
        Description: {
            rich_text: [
                {
                    plain_text: string
                }
            ]
        }
        WorkPeriod: {
            date: {
                start: string,
                end: string
            }
        }
        Name: {
            rich_text: [
                {
                    plain_text: string
                }
            ]
        }
        Tag: {
            multi_select: [
                {
                    color: string,
                    id: string,
                    name: string
                }
            ],
            type: string
        },
        GitHubLink: {
            url: string | null
        }
    }
}