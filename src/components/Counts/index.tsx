import { Row } from "react-bootstrap";
import './styles/index.css';
import { counts } from "./Data";
import Count from "../Count";
export default function Counts() {
  return (
    <>
      <div className="counts">
        <Row>
          {counts.map((item, index) => (
            <Count
              key={index}
              title={item.title}
              icon={item.icon}
              className={item.className}
            />
          ))}
          <h2 className="text-center mt-2">MERN Stack</h2>
        </Row>
      </div>
    </>
  );
}