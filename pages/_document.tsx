import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <html>
            <Head>
                <meta name="description" content="A site for my programing portfoloo"/>
                <meta charSet="utf-8"/>
                <meta name="robots"/>
                <meta name="viewport" content="width=device-width"/>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                      crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,300&display=swap"
                      rel="stylesheet"/>
            
            
            </Head>
            <body>
            
            <Main/>
            <NextScript/>
            </body>
            <style global jsx>{ `
                body {
                    font-family: 'Roboto', sans-serif;
                }
            ` }</style>
            </html>
        );
    }
}
