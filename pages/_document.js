import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
				<Main />
				<NextScript />
				</body>
				<style jsx global>{`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}		
				
html {
  font-size: 16px;
}

@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1200px) {
  html {
    font-size: 22px;
  }
}

body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #ff0099;
	background-color: rgba(188, 224, 211, 1);
	background-image: url('tile.png');
	font-family: Verdana, arial, serif;
}

@supports(display: grid) {
	body {
    	display: block;
  	}
}

				`}</style>
			</Html>
		)
	}
}

export default MyDocument
