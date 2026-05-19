import { useEffect, useState } from "react";

import Button from "./button.component";
import styles from "../page.module.css";
import { Cow, Meteor, Planet, UfoBeam } from "../../../../public/svg-logos/svg-icons";
import { useTranslation } from "react-i18next";

type WelcomeContainerProps = {
  onClick: () => void;
  onClickContact: () => void;
}

export function WelcomeContainer({ onClick, onClickContact }: WelcomeContainerProps) {
  const { t } = useTranslation();
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
      <Planet className={styles.planet} />
      <div className={styles.welcome_title}>

        <div className={styles.welcome_text}>
          <h2>
            {t("welcome.title")}
          </h2>
          <h3>
            <span>Leonardo Daniel Rebollo Calero</span> {t("welcome.subtitle")}
          </h3>
        </div>

       

        <div className={styles.background_light}></div>
        
        <div className={`${styles.buttonContainer} ${isSticky ? styles.stickyButtons : ""}`}>
          <Button onClick={onClick} label={t("button.see.proyects")} className={styles.button} />
          <Button onClick={onClickContact} label={t("button.contact.me")} className={styles.button} />
        </div>

      </div>
    </section>
  )
}