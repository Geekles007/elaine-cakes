import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface CustomLinkProps {
    href: string;
    size: number;
    color: string;
    icon: string;
    className?: string;
    imageSize?: string | number;
}

const LinkWrapper = styled.a<{size: number, color?: string;}>`
  border-radius: 50%;
  background-color: ${({color}) => color ?? "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size}) => (`${size}px`)};
  height: ${({size}) => (`${size}px`)};
  z-index: 9;

  box-shadow: 9px -1px 28px 1px rgba(0,0,0,0.23);
  -webkit-box-shadow: 9px -1px 28px 1px rgba(0,0,0,0.23);
  -moz-box-shadow: 9px -1px 28px 1px rgba(0,0,0,0.23);
  transition: all .3s 0s ease-in-out;
  
  &:hover {
    box-shadow: 9px -1px 31px 4px rgba(0,0,0,0.30);
    -webkit-box-shadow: 9px -1px 31px 4px rgba(0,0,0,0.30);
    -moz-box-shadow: 9px -1px 31px 4px rgba(0,0,0,0.30);
  }
`;

const CustomLink = ({href, size, icon, color, className, imageSize}: CustomLinkProps) => {

    return <LinkWrapper className={`${className}`} size={size} color={color} href={href} target={"_blank"}>
        <Image src={icon} alt={href} height={imageSize}/>
    </LinkWrapper>

}

export default (CustomLink);
