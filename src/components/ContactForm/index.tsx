import { useState } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../emailConfig";
import { Row } from "react-bootstrap";
import useAlert from "../../custom-hooks/useAlert";
import Alert from "../Alert";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { message, showAlert, status, setAlert, resetAlert } = useAlert();

    const sendEmail = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                e.target,
                PUBLIC_KEY
            );
                if (result.status === 200) {
                        setAlert("success", "Email sent successfully");
                    }
                else {
                    setAlert("danger", "Email could not be sent");
                }
            } catch (error) {
                setAlert("danger", "Email could not be sent");

            } finally {
                setIsSubmitting(false);
            }
    };

    return (
        <>
            <form onSubmit={sendEmail} className="email-form mt-4">
                <Row>
                {/* Name */}
                <div className="col-md-6 form-group">
                    <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    />
                </div>

                {/* Email */}
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    />
                </div>
                </Row>

                {/* Subject */}
                <div className="form-group mt-3">
                <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                />
                </div>

                {/* Message */}
                <div className="form-group mt-3">
                <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Message"
                    required
                ></textarea>
                </div>

                {/* Alert */}
                <div className="my-3">
                <Alert
                    type={status}
                    message={message}
                    onClose={resetAlert}
                    show={showAlert}
                />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending" : "Send Message"}
                    </button>
                </div>
            </form>
        </>
    );
}
