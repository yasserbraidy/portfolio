import Interest from "../Interest"
import { interests } from "./Data";
import './styles/index.css';
export default function Interests() {

    return (
      <>
        <div className="interests">
            <div className="section-title">
              <h2>Interests</h2>
            </div>

            <div className="row mt-4 mt-md-0">
              {interests.map((item, index) => (
                <Interest
                  key={index}
                  title={item.title}
                  color={item.color}
                  icon={item.icon}
                />
              ))}
            </div>
        </div>
      </>
    );
}