import ICount from "./interface";

export default function Count(props: ICount) {
    return (
        <>
            <div className={`col-lg-3 col-md-6 ${props.className}`}>
            <div className="count-box">
                <i className="p-2 rounded-circle">
                    {props.icon}
                </i>
                <h5>{props.title}</h5>
            </div>
            </div>
        </>
    );
}