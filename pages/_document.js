import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        const _renderPage = context.renderPage;

        try {
            context.renderPage = () =>
                _renderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(context);

            return {
                ...initialProps,
                styles: (
                    <Fragment>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </Fragment>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
