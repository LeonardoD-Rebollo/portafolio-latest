"use client";



import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import TimeLine from "./components/time-line.component";

import { WelcomeContainer } from "./components/welcome.component";
import { createStars } from "./functions/create-stars.function";
import ContactMe from "./components/contact-me.component";
import ProfileLine from "./components/profie-line.component";
import { BlackWave } from "./components/blackwave.component";
export interface Star {
  top: number;
  left: number;
}

export default function Home() {
  const [stars, setStars] = useState<Star[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    setStars(createStars(400, document.documentElement.scrollHeight, document.documentElement.scrollWidth));
  }, []);

  const ButtonClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="stars" className={styles.main}>

      <div className={styles.stars_container}>
        {stars.map((star, index) => (
          <figure
            key={index}
            className={styles.star}
            style={{
              top: `${star.top}px`,
              left: `${star.left}px`,
            }}
          />
        ))}
      </div>
      <div className={styles.container} >

        <WelcomeContainer onClick={() => ButtonClick()} onClickContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} />


        <section className={styles.userprofile} ref={ref}>
          <ProfileLine />
          <TimeLine />

        </section>
        <section ref={contactRef}>
          <ContactMe />
        </section>

        <BlackWave />
      </div>
    </div>
  );
}
