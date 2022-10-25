import { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';

export default function Document() {
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

Document.getInitialProps = async (ctx: DocumentContext) => {
	const props = await ctx.defaultGetInitialProps(ctx);

	return {
		...props,
		styles: Children.toArray([props.styles]),
	};
};
