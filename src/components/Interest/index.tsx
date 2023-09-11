import IInterest from "./interface";

export default function Interest(props: IInterest) {
    return (
        <>
            <div className={`col-lg-3 col-md-4 mt-4 ${props.className}`}>
                <div className="icon-box">
                    <i className="" style={{ color: props.color }}>{props.icon}</i>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </>
    );
}