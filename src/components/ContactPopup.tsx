"use client"; // Required if you're using server components in Next.js

import { useState } from "react";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import grainImage from "@assets/images/grain.jpg";

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
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-xl font-bold mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-lg"
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
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};