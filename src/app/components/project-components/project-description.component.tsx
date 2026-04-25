"use client";

import { ProjectsInterface } from "@/app/projects/projects-list";
import styles from "../../projects/projects.module.css";
import { TecnologiesList } from "@/app/projects/tecnologies-list";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HideSourceIcon from "@mui/icons-material/HideSource";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
interface ProjectDescriptionProps {
  data: ProjectsInterface;
}
export function ProjectDescription({ data }: ProjectDescriptionProps) {
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
        <h2>{data.name}</h2>
        <p>{data && data.description}</p>
      </section>
      <section className={styles.repository_section}>
        <div className={styles.glass_container}>
          <div className={styles.glass_container_title}>
            <h4>Fechas de desarrollo</h4>
          </div>

          <p>
            <CalendarMonthIcon /> {data.date}
          </p>
        </div>
        <div className={styles.glass_container}>
          {data.repository === "Privado" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.glass_container_title}>
                <h4>Repositorio</h4>

                <OpenInNewIcon
                  sx={{
                    display: data.repository != "Privado" ? "block" : "none",
                  }}
                />
              </div>
              <a>
                <HideSourceIcon /> Privado
              </a>
            </div>
          ) : (
            <a
              style={{ display: "flex", flexDirection: "column" }}
              href={data.repository}
              target="_blank"
            >
              <div className={styles.glass_container_title}>
                <h4>Repositorio</h4>

                <OpenInNewIcon
                  sx={{
                    display: data.repository != "Privado" ? "block" : "none",
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
        <h4>Caracteristicas principales</h4>
        <ol className={styles.features_list}>
          {data.features?.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ol>
        <section>
          <h4>Tecnologías usadas</h4>

          <div className={styles.tecnologies}>
            {(data.projectTecnologies &&
              mappedTechnologies &&
              mappedTechnologies.map((tech) => (
                <Tooltip title={tech.name} key={tech.id}>
                  <div key={tech.id}>{tech.icon}</div>
                </Tooltip>
              ))) || <p>No hay tecnologías</p>}
          </div>
        </section>
      </section>
    </div>
  );
}
