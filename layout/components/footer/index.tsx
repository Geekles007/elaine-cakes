import React from "react";
import {FooterWrapper} from "./default";
import CustomLink from "../../../components/custom-link";
import facebook from "./../../../public/icons/facebook.svg";
import instagram from "./../../../public/icons/instagram.svg";

type FooterProps = {}

const Footer = ({}: FooterProps) => {

    return <FooterWrapper>
        <div className="_content">
            <CustomLink color={"#fff"} href={"/"} icon={instagram} size={40} imageSize={"80%"}/>
            <CustomLink color={"#fff"} href={"/"} icon={facebook} size={40} imageSize={150}/>
        </div>
    </FooterWrapper>

}

export default (Footer);
