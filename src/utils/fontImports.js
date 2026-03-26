import novaFontUrl from "../assets/fonts/NovaRound-Regular.ttf";

const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@font-face {
  font-family: 'Nova Round'; 
  src: url(${novaFontUrl}) format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
document.head.appendChild(styleSheet);
