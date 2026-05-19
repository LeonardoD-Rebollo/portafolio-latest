import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import styles from "../page.module.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Projects } from "../projects/projects-list";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function TimeLine() {
  const observer = useRef<IntersectionObserver | null>(null);
  const { t } = useTranslation("projects");
  const pathname = usePathname();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const Intersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    };

    observer.current = new IntersectionObserver(Intersection, {
      threshold: 0.1,
    });

    const items = document.querySelectorAll(`.${styles.timeline_content}`);
    items.forEach((item) => observer.current?.observe(item));

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const Intersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    };

    observer.current = new IntersectionObserver(Intersection, {
      threshold: 0.1,
    });

    const items = document.querySelectorAll(`.${styles.timeline_item}`);
    items.forEach((item) => observer.current?.observe(item));

    return () => {
      observer.current?.disconnect();
    };
  }, []);


  return (
    <div>


      <div className={styles.timeline_container}>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}

        >
          {Projects.map((item, index) => (
            <TimelineItem
              key={item.id}
              className={styles.timeline_item}
            >
              {
                screenWidth > 700 &&
                <TimelineOppositeContent>
                  <p className={styles.timeline_date}>{t(item.date)}</p>
                </TimelineOppositeContent>

              }

              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                </TimelineDot>
                {index !== Projects.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ m: 0 }}>
                <Link href={`${pathname.split("/")[1]}/projects/${item.id.toString()}`} style={{ textDecoration: "none", color: "white" }}>
                  <div className={styles.timeline_content}>
                    <section>
                      <h3>{t(item.name)}</h3>
                      {
                        screenWidth < 700 &&
                        <p className={styles.timeline_date}>{t(item.date)}</p>
                      }

                      <p
                        style={{
                          maxWidth: "500px",
                          textAlign: "justify",
                        }}
                      >
                        {t(item.description)}
                      </p>
                    </section>
                    {
                      screenWidth > 700 &&
                      <section>
                        <ArrowForwardIosRoundedIcon className={styles.icon} />
                      </section>
                    }
                  </div>
                </Link>
              </TimelineContent>

            </TimelineItem>


          ))}
        </Timeline>

      </div>
    </div>


  );
}