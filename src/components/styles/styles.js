import { createGlobalStyle } from 'styled-components'

export const colors = {
    background: '#FFFFFF',
  
    fillLightExtra: '#f5f5f5',
    fillLight: '#99978D',
    fillRegular: '#4A4944',
    fillStrong: '#31302B',
  
    highlightHard: '#275397',
    highlightSoft: '#2D6CD3',
    highlightJob: '#fff78f',
  
  }

  export const fontFamily = {
    headerFamily: "'Montserrat', sans-serif",
    bodyFamily: "'Open Sans', sans-serif"
  }
  
  export const GlobalStyle = createGlobalStyle`
    /* Use href in public.html instead of css import */
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600|Montserrat:700');
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      background: ${colors.background};
      padding: 0;
      margin: 0;
      font-family: ${fontFamily.bodyFamily};
      color: ${colors.fillRegular};
      line-height: 1.45
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${colors.fillStrong};
      font-family: ${fontFamily.headerFamily};
    }
    img{
      max-width: 100%;
    }
  `