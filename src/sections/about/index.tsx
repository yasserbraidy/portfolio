import { Container } from "react-bootstrap";
import './styles/index.css';
import LearnMore from "../../components/LearnMore";
import Counts from "../../components/Counts";
import Interests from "../../components/Interests";
export default function About() {
    return (
        <>
        <Container className="about-me">
            <LearnMore />
            <Counts />
            <Interests />
        </Container>
        </>
    );
}