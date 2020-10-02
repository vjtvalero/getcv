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
                    font-family: "Cambria", "Georgia", "Palatino Linotype", "Book Antiqua", Palatino, serif;
                    font-size: 11pt;
                }
                h2 {
                    text-transform: uppercase;
                }
                h3 {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                    text-transform: uppercase;
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

