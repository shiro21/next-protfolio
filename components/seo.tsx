import Head from "next/head";

// Warning: A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering
// title을 {}로 감싸준 이유: 요소가 받을 수 있는 노드는 1개인데 1개이상 받고있는것같다는 경고입니다. 그렇기에 노드를 1개만 건내주듯이 아래처럼 하나로 감싸주었습니다.
export default function Seo({ title }) {
    return (
        <Head>
            <title key="title">{`${title} | Portfolio`}</title>
            <meta name="description" content="Contents" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}