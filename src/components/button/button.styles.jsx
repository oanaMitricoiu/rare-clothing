import styled from "styled-components";

export const BaseButton = styled.button `
   min-width: 165px;
    width: auto;
    height: 3.1rem;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`

export const GoogleSignInButton = styled(BaseButton) `
    background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }
`

export const InvertedButton = styled(BaseButton) `
      background-color: white;
      width:auto;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`

export const CartButton = styled.button `
      background-color: black;
      width:auto;
      color: white;
      border: 1px solid black;
      height: 5rem;
      line-height: 30px;
      padding: 8px 35px;
  
      &:hover {
        background-color: white;
        color: black;
        border: none;
        height: 5rem;
        line-height: 30px;
        padding: 8px 35px;
        border: 1px solid black;
`


// .button-container {
//     min-width: 165px;
//     width: auto;
//     height: 3.1rem;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     padding: 0 35px 0 35px;
//     font-size: 15px;
//     background-color: black;
//     color: white;
//     text-transform: uppercase;
//     font-family: 'Open Sans Condensed';
//     font-weight: bolder;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
  
//     &:hover {
//       background-color: white;
//       color: black;
//       border: 1px solid black;
//     }
  
//     &.google-sign-in {
//       background-color: #4285f4;
//       color: white;
  
//       &:hover {
//         background-color: #357ae8;
//         border: none;
//       }
//     }

//     &.cart {
//       background-color: black;
//       width:auto;
//       color: white;
//       border: 1px solid black;
//       height: 5rem;
//       line-height: 30px;
//       padding: 8px 35px;
  
//       &:hover {
//         background-color: white;
//         color: black;
//         border: none;
//         height: 5rem;
//         line-height: 30px;
//         padding: 8px 35px;
//         border: 1px solid black;
//       }
//     }
  
//     &.inverted {
//       background-color: white;
//       width:auto;
//       color: black;
//       border: 1px solid black;
  
//       &:hover {
//         background-color: black;
//         color: white;
//         border: none;
//       }
//     }
//   }

  
  