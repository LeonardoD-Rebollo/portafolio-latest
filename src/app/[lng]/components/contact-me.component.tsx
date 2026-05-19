import styles from "../page.module.css";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function ContactMe() {
  const { t } = useTranslation();
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const SendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0ofkz3f",
        "template_apgmrlt",
        {
          from_email: Email,
          message: Message,
        },
        "K44vvhF-KcR2gayIp"
      )
      .then(() => {
        alert(t("contact.form.send.success"));
        setEmail("");
        setMessage("");

      })
      .catch((error) => {
        console.error(t("contact.form.send.error"), error);
        alert(t("contact.form.send.error"));
      });
  }

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({
    email: undefined,
    message: undefined,
  });

  const formValidation = (e: React.FormEvent) => {
    const newErrors: { [key: string]: string | undefined } = {};
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Email.trim()) {
      newErrors.email = t("contact.form.mail.error");
    }
    if (!emailRegex.test(Email)) {
      newErrors.email = t("contact.form.mail.error2");

    }
    if (!Message.trim()) {
      newErrors.message = t("contact.form.message.error");
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      SendEmail(e);
    }

  };

  return (
    <div className={styles.contactMe_container}>
      <div className={styles.contactMe_body}>
        <RocketLaunchIcon className={styles.rocket} />
        <div className={styles.input_container}>
          <p>{t("contact.form.mail")}:</p>
          <label className={errors.email ? styles.error_label : ""}>{errors.email}</label>
          <input onChange={(e) => setEmail(e.target.value)} className={errors.email ? styles.error_input : styles.input_contact} />
        </div>

        <div className={styles.input_container}>
          <p>{t("contact.form.message")}:</p>
          <label className={errors.message ? styles.error_label : ""}>{errors.message}</label>
          <textarea rows={5} onChange={(e) => setMessage(e.target.value)} className={errors.message ? styles.error_input : styles.input_contact} />
        </div>
        <button onClick={formValidation}>{t("contact.form.send")}</button>

      </div>
    </div>
  );
}