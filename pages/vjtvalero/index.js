import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

export default function CV({ content, data }) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <link rel="icon" href="logo.png" type="image/svg+xml" />
            </Head>
            <div className="container">
                <div style={{ float: 'right' }}>
                    <a href="download/cv-vjtvalero.pdf">Download</a>
                </div>
                <ReactMarkdown source={content} escapeHtml={false} />
            </div>
            <style jsx>{`
                .container {
                    margin: 3rem auto;
                    max-width: 800px;
                    padding: 0 1rem;
                }
            `}</style>
            <style jsx global>{`
                html, body {
                    padding: 0;
                    margin: 0;
                    font-family: Cambria, Times New Roman, Linux Libertine, serif;
                    font-size: 11pt;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>
    )
}

CV.getInitialProps = async (ctx) => {
    const content = await import('./cv-vjtvalero.md')
    const data = matter(content.default)
    return {
        ...data
    }
}

