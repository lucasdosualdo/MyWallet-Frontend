import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

// RESET CSS
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
	background-color: #8C11BE;
	width: 100vw;
 	height: 100vh;
	font-family: 'Raleway';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

//OTHER PROPS
* {
  box-sizing: border-box;
}

h1 {
	font-family: 'Saira Stencil One';
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 50px;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	margin-bottom: 25px;
}

h2 {
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: #FFFFFF;
}

h3 {
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	color: #FFFFFF;
}

h4 {
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	color: #FFFFFF;
}

h5 {
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	margin-top: 50px;
}
a{ 
    text-decoration: none;
}

ion-icon {
	width: 24px;
	height: 24px;
	color: white;
}

img {
	width: 24px;
	height: 24px;
	color: white;
}
`
export default GlobalStyle;