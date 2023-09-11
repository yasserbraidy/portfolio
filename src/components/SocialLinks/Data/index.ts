import { icons } from "../../icons";
import ISocialLink from "../interface";
import { Facebook, Github, Instagram, Linkedin, Tiktok, Twitter, Youtube } from 'react-bootstrap-icons';

export const socialLinks: Array < ISocialLink >= [
    {
        icon: icons.twitter,
        href: 'https://twitter.com/yasseralbraidy',
        className:"twitter",
    },
    {
        icon: icons.facebook,
        href: 'https://www.facebook.com/YasserAminAlBraidy/',
        className:"facebook",
    },
    {
        icon: icons.instagram,
        href: 'https://www.instagram.com/yassertechnology/',
        className:"instagram",
    },
    {
        icon: icons.linkedIn,
        href: 'https://www.linkedin.com/in/yasseralbraidy/',
        className:"linkedin",
    },
    {
        icon: icons.github,
        href: 'https://github.com/yasserbraidy',
        className:"github",
    },
    {
        icon: icons.tiktok,
        href: 'https://www.tiktok.com/@yasser.tech',
        className:"tiktok",
    },
    {
        icon: icons.youtube,
        href: 'https://www.youtube.com/@yassertech1902',
        className:"youtube",
    },
]