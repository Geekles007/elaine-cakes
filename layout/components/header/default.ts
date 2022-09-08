import styled from "styled-components";
import {theme} from "../../../constants";

export const HeaderWrapper = styled.header`
  z-index: 2;
  position: absolute;
  width: 100%;
  
  ._content {
    max-width: 1370px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    
    ._logo {
      flex-shrink: 1;
      width: 100px;
      font-weight: 400;
      border-right: 3px solid ${theme.primaryColor};
      
      strong {
        color: ${theme.secondary};
        font-size: 1em;
      }
    }
    
    ul {
      list-style: none;
      display: flex;
      flex-grow: 6;
      gap: 2rem;
      
      li {
        font-size: .9rem;
        font-weight: 500;
        
        a {
          color: #000;
          transition: all .5s 0s ease-in-out;
          
          &:hover {
            color: ${theme.primaryColor};
          }
        }
      }
    }
    
    ._cart {
      flex-shrink: 1;
    }
  }
`;
