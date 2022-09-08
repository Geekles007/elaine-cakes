import React from "react";
import Link from "next/link";
import {TLink} from "../../../models/ILink";
import useSWR from "swr";
import {deploy, theme} from "../../../constants";
import {HeaderWrapper} from "./default";
import CustomLink from "../../../components/custom-link";
import cart from "./../../../public/icons/cart.svg";

const Header = () => {
    const fetcher = (...args: any) => fetch(args).then(res => res.json())
    const { data: links, error } = useSWR(`${deploy}/links`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!links) return <div>Loading...</div>

    return <HeaderWrapper>
        <div className="_content">
            <div className="_logo">
                <strong>Elaine's <br/> Star</strong>
            </div>
            <ul>
                {
                    links?.map((item: TLink, index: number) => {
                        return <li key={index}>
                            <Link href={item?.link}>
                                <a>
                                    {item?.title}
                                </a>
                            </Link>
                        </li>
                    })
                }
            </ul>
            <div className="_cart">
                <CustomLink size={40} color={theme.secondary} href={"/"} icon={cart} />
            </div>
        </div>
    </HeaderWrapper>

}

export default (Header);
