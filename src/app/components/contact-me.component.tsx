import styles from "../page.module.css";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import emailjs from "emailjs-com";
import { useState } from "react";
export default function ContactMe() {
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
          alert("Correo enviado con éxito.");       
          setEmail("");
          setMessage("");

        })
        .catch((error) => {
          console.error("Error al enviar el correo:", error);
          alert("Hubo un error al enviar el correo.");
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
              newErrors.email = "El correo electrónico es requerido.";
            }
            if (!emailRegex.test(Email)) {
              newErrors.email = "El correo electrónico no es válido.";

            }
            if (!Message.trim()) {
              newErrors.message = "El mensaje es requerido.";
            }
            setErrors(newErrors);

            if(Object.keys(newErrors).length === 0){
                SendEmail(e);
            }
            
          };
    
    return (
        <div className={styles.contactMe_container}>
           <div className={styles.contactMe_body}>
           
            <RocketLaunchIcon className={styles.rocket}/>
            <h2>CONTACTAME</h2>
            <div className={styles.input_container}>
            <p>Email:</p>
            <label className={errors.email ? styles.error_label : ""}>{errors.email}</label>
            <input onChange={(e) => setEmail(e.target.value)} className={errors.email ? styles.error_input : styles.input_contact}/>
            </div>
            
            <div className={styles.input_container}>
            <p>Mensaje:</p>
            <label className={errors.message ? styles.error_label : ""}>{errors.message}</label>
            <textarea rows={5} onChange={(e) => setMessage(e.target.value)} className={errors.message ? styles.error_input : styles.input_contact}/>
            </div>
            <button onClick={formValidation}>Enviar</button>
          
           </div>
        </div>
    );
}