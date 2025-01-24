import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "./global.css";

export const metadata: Metadata = {
    title: "Frontend App",
    description: "Frontend App Root Page",
};

export default function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body>{props.children}</body>
        </html>
    );
}
