import Typed from "typed.js";
import { useEffect, useRef } from "react";
import ITyped from "./interface";

export default function TypedText(props: ITyped) {
    const typedText = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedText.current) {
            const typed = new Typed(typedText.current, {
                strings: props.strings,
                typeSpeed: props.typeSpeed,
                backSpeed: props.backSpeed,
                loop: props.infinity,
                backDelay: props.backDelay,
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return <span ref={typedText} className="fs-4"></span>;
}
