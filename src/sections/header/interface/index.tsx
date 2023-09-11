import { RefObject } from "react";

export default interface IHeader {
    about: RefObject<HTMLDivElement>;
    resume: RefObject<HTMLDivElement>;
    services: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
}