"use client";

import { useRouter } from "next/navigation";
import styles from "../projects.module.css";
import { BlackWave } from "@/app/components/blackwave.component";
import { Star } from "@/app/page";
import { use, useEffect, useState } from "react";
import { createStars } from "@/app/functions/create-stars.function";
import { Astronaut } from "../../../../public/svg-logos/svg-icons";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton } from "@mui/material";
import { ProjectDescription } from "@/app/components/project-components/project-description.component";
import { Projects, ProjectsInterface } from "../projects-list";
import ProjectImages from "@/app/components/project-components/project-images.component";
import { Spinner } from "@/app/components/project-components/spinner.component";

export interface ProjectResponse {
  data: ProjectsInterface;
}
export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const [data, setData] = useState<ProjectResponse>();
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setWidth(window.innerWidth);
    setStars(
      createStars(
        width > 720 ? 300 : 100,
        document.documentElement.scrollHeight,
        document.documentElement.scrollWidth
      )
    );
  }, []);

  const getProject = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/projects-api?id=${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

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
      <div className={styles.container}>
        <section>
          <IconButton>
            <span
              onClick={() => router.push("/")}
              className={styles.backButton}
            >
              <ArrowBackIosNewRoundedIcon sx={{ color: "black" }} />
              <p className={styles.backButtonText}>Volver</p>
            </span>
          </IconButton>
        </section>
        <section className={styles.project_section}>
          <div className={styles.project}>
            {loading ? (
              <Spinner />
            ) : data ? (
              <ProjectDescription data={data.data} />
            ) : (
              <p>Proyecto no encontrado</p>
            )}

            <div className={styles.images_project}>
              <ProjectImages data={data?.data.images || []} />
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            {id === "1" ? null : (
              <button
                className={styles.button_next}
                onClick={() => router.push("/projects/" + (parseInt(id) - 1))}
              >
                Anterior proyecto
              </button>
            )}
            {id === Projects.length.toString() ? null : (
              <button
                className={styles.button_next}
                onClick={() => router.push("/projects/" + (parseInt(id) + 1))}
              >
                Siguiente proyecto
              </button>
            )}
          </div>
        </section>
      </div>
      <Astronaut className={styles.astronaut} />
      <BlackWave />
    </div>
  );
}
