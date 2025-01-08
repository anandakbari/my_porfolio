"use client";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import grainImage from "@assets/images/grain.jpg";
import {useState} from "react";


const ContactPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Replace with your email-sending logic, e.g., EmailJS or an API call
        try {
            await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send the message. Please try again.");
        }

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 text-center justify-center">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-lg text-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-lg text-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-lg text-black"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className=" bg-gradient-to-r from-emerald-300 to-sky-400 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export const ContactSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <section id={"contact"}>
            <div className={"py-16 pt-12 lg:py-24 lg:pt-20"}>
                <div className={"container"}>
                    <div
                        className={
                            "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
                        }
                    >
                        <div
                            className={"absolute inset-0 opacity-5 -z-10"}
                            style={{
                                backgroundImage: `url(${grainImage.src})`,
                            }}
                        ></div>
                        <div className={"flex flex-col md:flex-row gap-8 md:gap-16 items-center"}>
                            <div>
                                <h2 className={"font-serif text-2xl md:text-3xl"}>
                                    Let us create something amazing together
                                </h2>
                                <p className={"text-sm md:text-base mt-2"}>
                                    Ready to bring your ideas to life? Let us talk about how we can work together to
                                    create something amazing. I can help you turn your vision into a reality.
                                </p>
                            </div>
                            <div>
                                <button
                                    onClick={openPopup}
                                    className={
                                        "text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                                    }
                                >
                                    <span className={"font-semibold"}>Contact Me</span>
                                    <ArrowUpRightIcon className={"size-4 ml-2"} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <ContactPopup onClose={closePopup} />}
        </section>
    );
};
