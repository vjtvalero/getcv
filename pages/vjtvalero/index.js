import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Link from 'next/link'

export default function CV({ content, data }) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <link rel="icon" href="logo.png" type="image/svg+xml" />
            </Head>
            <div className="container">
                <div style={{ float: 'right' }}>
                    <a href="#!" onClick={() => { window.print() }}>Download</a>
                </div>
                <ReactMarkdown source={content} escapeHtml={false} />
            </div>
            <style jsx>{`
                .container {
                    padding-left: 1rem;
                    padding-right: 1rem;
                    max-width: 800px;
                }
            `}</style>
            <style jsx global>{`
                html, body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    font-size: 10pt;
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

