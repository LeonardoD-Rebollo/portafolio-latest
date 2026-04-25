"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import TimeLine from "./components/time-line.component";
import ProfileLine from "./components/profie-line.component";
import { WelcomeContainer } from "./components/welcome.component";
import { BlackWave } from "./components/blackwave.component";
import { createStars } from "./functions/create-stars.function";
import ContactMe from "./components/contact-me.component";
export interface Star {
  
  top: number;
  left: number;
}

export default function Home() {
  const [stars, setStars] = useState<Star[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    setStars(createStars(300, document.documentElement.scrollHeight, document.documentElement.scrollWidth));
  }, []);

  const ButtonClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="stars" className={styles.main}>
  
      {stars.map((star, index) => (
        <figure
          key={index}
          className="star"
          style={{
            position: "absolute",
            top: `${star.top}px`,
            left: `${star.left}px`,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
      <div className={styles.container} >
      
        <WelcomeContainer onClick={() => ButtonClick()} onClickContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}/>
        

        <section className={styles.userprofile} ref={ref}>
          <ProfileLine />
          <TimeLine />
        
        </section>
        <section ref={contactRef}>
        <ContactMe />
        </section>
        
        <BlackWave/>
      </div>
    </div>
  );
}
