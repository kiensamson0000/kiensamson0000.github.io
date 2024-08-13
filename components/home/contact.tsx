import { EMAIL } from "../../constants";
import React, { useState } from "react";
import Button, { ButtonTypes } from "../common/button";

const CONTACT_STYLE = {
  BUTTON_EMAIL:
    "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center transition-opacity",
};

const ContactSection = ({ typeButton }: { typeButton: ButtonTypes }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <Button
      classes="ml-3 relative inline-block w-36"
      type={typeButton}
      name={""}
      onClick={handleCopyEmail}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`${isHovered || isCopied ? "opacity-0" : "opacity-100"} ${CONTACT_STYLE.BUTTON_EMAIL}`}
      >
        Let's talk
      </span>
      <span
        className={`${isHovered && !isCopied ? "opacity-100" : "opacity-0"} ${CONTACT_STYLE.BUTTON_EMAIL}`}
      >
        Copy Email
      </span>
      <span className={`${isCopied ? "opacity-100" : "opacity-0"} ${CONTACT_STYLE.BUTTON_EMAIL}`}>
        Copied!
      </span>
    </Button>
  );
};

export default ContactSection;
