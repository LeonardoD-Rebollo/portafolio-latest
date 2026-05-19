"use client";

import { ProjectsInterface } from "@/app/[lng]/projects/projects-list";
import styles from "../../projects/projects.module.css";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HideSourceIcon from "@mui/icons-material/HideSource";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { TecnologiesList } from "../../projects/tecnologies-list";
import { useTranslation } from "react-i18next";
interface ProjectDescriptionProps {
  data: ProjectsInterface;
}
export function ProjectDescription({ data }: ProjectDescriptionProps) {
  const { t } = useTranslation("projects");
  const mappedTechnologies = data.projectTecnologies?.map((tech) => {
    const matchedTech = TecnologiesList.find((t) => t.id === tech.id);
    return {
      ...tech,
      icon: matchedTech?.icon || null,
    };
  });
  return (
    <div className={styles.description_project}>
      <section>
        <h2>{t(data.name)}</h2>
        <p>{data && t(data.description)}</p>
      </section>
      <section className={styles.repository_section}>
        <div className={styles.glass_container}>
          <div className={styles.glass_container_title}>
            <h4>{t("projects.description.dates")}</h4>
          </div>

          <p>
            <CalendarMonthIcon /> {t(data.date)}
          </p>
        </div>
        <div className={styles.glass_container}>
          {data.repository === "private"   ? ( 
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.glass_container_title}>
                <h4>{t("projects.description.repository")}</h4>

                <OpenInNewIcon
                  sx={{
                    display: data.repository != t("projects.description.private")  ? "block" : "none",
                  }}
                />
              </div>
              <a>
                <HideSourceIcon /> {t("projects.description.private")}
              </a>
            </div>
          ) : (
            <a
              style={{ display: "flex", flexDirection: "column" }}
              href={data.repository}
              target="_blank"
            >
              <div className={styles.glass_container_title}>
                <h4>{t("projects.description.repository")}</h4>

                <OpenInNewIcon
                  sx={{
                    display: data.repository != "private"  ? "block" : "none",
                  }}
                />
              </div>
              <div className={styles.repository}>
                <GitHubIcon /> Github{" "}
              </div>
            </a>
          )}
        </div>
      </section>
      <section
        className={styles.glass_container_features}
        style={{ marginTop: "1rem" }}
      >
        <h4>{t("projects.description.features")}</h4>
        <ol className={styles.features_list}>
          {data.features?.map((feature) => (
            <li key={feature}>{t(feature)}</li>
          ))}
        </ol>
        <section>
          <h4>{t("projects.description.technologies")}</h4>

          <div className={styles.tecnologies}>
            {(data.projectTecnologies &&
              mappedTechnologies &&
              mappedTechnologies.map((tech) => (
                <Tooltip title={tech.name} key={tech.id}>
                  <div key={tech.id}>{tech.icon}</div>
                </Tooltip>
              ))) || <p>{t("projects.description.no_tecnologies")}</p>}
          </div>
        </section>
      </section>
    </div>
  );
}
