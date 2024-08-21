import React, { useState } from "react";
import { motion } from "framer-motion";
import { inputs } from "@/app/utils/utils";
import { Toaster, toast } from "sonner";
import emailjs from "emailjs-com";
import Button from "./Button";

const Modal = ({ isOpen, closeModal }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState({});
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions((prevPositions) => ({
      ...prevPositions,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message } = inputValues;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      toast.error("You can't leave any empty field.");
      return false;
    }

    if (name.length <= 3) {
      toast.error("The name must have more than 3 characters.");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Email is not valid.");
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      to_name: "Rous",
      name: inputValues.name,
      email: inputValues.email,
      message: inputValues.message,
    };

    emailjs
      .send(
        "service_3o7bz1c",
        "template_bgryd6t",
        templateParams,
        "5MfjL42iH1sIfbvrG"
      )
      .then((response) => {
        toast.success("Email sent successfully!");
        setIsSubmitting(false);
        closeModal();
      })
      .catch((err) => {
        console.error("Error al enviar el correo:", err);
        setError(
          "Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde."
        );
        setIsSubmitting(false);
      });
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <>
      <Toaster />
      <div
        className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center p-2 justify-center"
        onClick={closeModal}
      >
        <div
          className="bg-black relative border-2 border-white/5 overflow-hidden  flex items-center justify-center flex-col p-6 rounded-xl shadow-lg"
          onClick={handleModalClick}
        >
          <span className="absolute bottom-0 left-4 inset-x-1 h-[1.5px] dark:bg-gradient-to-r w-44 dark:from-fuchsia-400/0 dark:via-white/10 "></span>
          <div className="absolute w-14 h-14 top-0 left-0 bg-white blur-3xl opacity-80" />
          <h2 className="text-2xl text-white mb-4">Send me a message</h2>
          <p className="mb-4 text-white/50">
            Fill in the fields below and I will contact you to help you with
            your next banner.
          </p>
          <form onSubmit={handleFormSubmit} className="w-full">
            {inputs.map((item, i) => (
              <motion.div
                key={i}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                className="relative w-full my-5"
              >
                <motion.input
                  placeholder={item.placeholder}
                  value={inputValues[item.label]}
                  onChange={(e) => handleInputChange(e, item.label)}
                  className="bg-transparent text-white outline-none placeholder:text-white/40  relative flex items-center border border-white/5 z-10 w-full rounded-xl p-3.5 transition-opacity duration-500"
                />
                <motion.input
                  style={{
                    border:
                      hoveredIndex === i
                        ? "3px solid rgba(255, 255, 255, 0.5)"
                        : "none",
                    opacity: 1,
                    WebkitMaskImage:
                      hoveredIndex === i
                        ? `radial-gradient(10% 100px at ${
                            positions[i]?.x || 0
                          }px ${
                            positions[i]?.y || 0
                          }px, black 45%, transparent)`
                        : "none",
                  }}
                  aria-hidden="true"
                  className=" pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-xl border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
                />
              </motion.div>
            ))}
            <div className="flex gap-2 justify-between w-full">
              <Button
              padding={"px-2 py-2"}
                type="submit"
                disabled={isSubmitting}
                sizeX={4}
                sizeY={2}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linejoin="round"
                        d="m9 9l4.5 3L18 9M3 13.5h2m-4-3h4"
                      />
                      <path d="M5 7.5V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5" />
                    </g>
                  </svg>
                }
              >
                Send
              </Button>
              <Button
              padding={"px-2 py-2"}
                sizeX={4}
                sizeY={2}
                onClick={closeModal}
                icon={
                  <svg
                    opacity={0.8}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m.849-8.8l3.11 3.111l-.848.849L12 12.849l-3.111 3.11l-.849-.848L11.151 12l-3.11-3.111l.848-.849L12 11.151l3.111-3.11l.849.848z"
                    />
                  </svg>
                }
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
