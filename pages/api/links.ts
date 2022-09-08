import {NextApiRequest, NextApiResponse} from "next";
import {TLink} from "../../models/ILink";

export type LinkData = Array<TLink>;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LinkData>
) {
    res.status(200).json([
        {
            id: "1",
            title: "Menu",
            link: "/menu"
        },
        {
            id: "2",
            title: "About us",
            link: "/about-us"
        },
        {
            id: "3",
            title: "Contact us",
            link: "/contact-us"
        },
    ])
}
