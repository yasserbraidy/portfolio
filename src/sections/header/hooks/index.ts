import { RefObject, useEffect, useState } from "react";
import AOS from "aos";
import IHeader from "../interface";

export default function useHeaderHooks(props: IHeader, navBar: RefObject<HTMLDivElement>) {
    const [activeNav, setActiveNav] = useState<string>("home");
    const [isHeaderTop, setIsHeaderTop] = useState<boolean>(false);
    let navElement = navBar.current;
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 991);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        about: props.about,
        resume: props.resume,
        services: props.services,
        contact: props.contact,
    };
    const speed: number = 80;
    const backSpeed: number = 20;
    const backDelay: number = 1000;
    const isInfinity: boolean = true;
    const strings: Array<string> = [
        "Programmer", "Developer", "Freelancer", "Software Engineer", "Software Developer", "Full Stack Developer",
    ];
    
    useEffect(() => {
        AOS.init();
        setMobile();
        navElement = navBar.current; //this has been written because at the first toggle the navElement gives null, so i have to mention it at the rendering to assign it and avoiding null 
    }, []);

    useEffect(() => {
        setMobile();
    }, [window.innerWidth]);


    function scrollToSection(sectionId: string) {
        const section = sectionRefs[sectionId];
        if (section.current) {
            removeSectionShow();
            section.current.classList.add("section-show");
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    function removeSectionShow() {
        Object.values(sectionRefs).forEach((section) => {
            if (section && section.current) {
                section.current.classList.remove("section-show");
            }
        });
    }

    function activeHome() {
        setIsHeaderTop(false);
        removeSectionShow();
    };

    function active(sectionId: string) {
        setActiveNav(sectionId);

        if (sectionId !== "home") {
            scrollToSection(sectionId);
            setIsHeaderTop(true);
        }
        else
        {
            activeHome();
        }
        collapse();
    }

    function setMobile() {
        setScreenWidth(window.innerWidth);
        if (screenWidth <= 991) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
            collapse();
        }
    }

    function expand() {
        if (!isMobile)
            return;
        console.log("here")

        if (!navElement)
            return;
        setIsCollapsed(false);
        navElement.classList.add("navbar-mobile");
    }

    function collapse() {
        if (!navElement)
            return;
        setIsCollapsed(true);
        navElement.classList.remove("navbar-mobile");
    }

    function toggle() {
        setMobile();
        if (!isMobile) {
            return;
        }

        setIsCollapsed(!isCollapsed);

        if (!isCollapsed) {
            collapse();
        } else {
            expand();
        }
    }

    return {
        activeNav,
        isHeaderTop,
        speed,
        backSpeed,
        backDelay,
        isInfinity,
        strings,
        active,
        isCollapsed,
        toggle,
    }
}
