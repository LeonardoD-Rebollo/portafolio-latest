import { useEffect, useState } from "react";
import Button from "./button.component";
import styles from "../page.module.css";
import { Cow, Meteor, Planet, UfoBeam } from "../../../public/svg-logos/svg-icons";

export function WelcomeContainer({ onClick, onClickContact }: any) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.welcome}>
      
      <UfoBeam className={styles.ufo} />
      <Cow className={styles.cow} />
      <Meteor className={styles.meteor} />

      <div className={styles.welcome_title}>

        <div className={styles.welcome_text}>
          <h2>
            Hola que tal, soy
          </h2>
          <h3>
            <span>Leonardo Daniel Rebollo Calero</span> y este es mi portafolio
          </h3>
        </div>

        <Planet className={styles.planet} />

        <div className={styles.background_light}></div>
        
        <div className={`${styles.buttonContainer} ${isSticky ? styles.stickyButtons : ""}`}>
          <Button onClick={onClick} label="Ver Proyectos" className={styles.button} />
          <Button onClick={onClickContact} label="Contactame" className={styles.button} />
        </div>

      </div>
    </section>
  )
}