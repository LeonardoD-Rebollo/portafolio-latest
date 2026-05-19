"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "../projects.module.css";
import { BlackWave } from "@/app/[lng]/components/blackwave.component";
import { use, useEffect, useState } from "react";
import { createStars } from "@/app/[lng]/functions/create-stars.function";
import { Astronaut, SittingBook } from "../../../../../public/svg-logos/svg-icons";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton } from "@mui/material";
import { ProjectDescription } from "@/app/[lng]/components/project-components/project-description.component";
import { Projects, ProjectsInterface } from "../projects-list";
import ProjectImages from "@/app/[lng]/components/project-components/project-images.component";
import { Spinner } from "@/app/[lng]/components/project-components/spinner.component";
import { Star } from "../../page";
import { useTranslation } from "react-i18next";

export interface ProjectResponse {
  data: ProjectsInterface;
}
export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const router = useRouter();
  const { t } = useTranslation();
  const { id } = use(params);
  const [data, setData] = useState<ProjectResponse>();
  const pathname = usePathname();
  const lng = pathname.split("/")[1];
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);

  console.log(lng)

  useEffect(() => {
    setWidth(window.innerWidth);
    setStars(
      createStars(
        width > 720 ? 160 : 200,
        document.documentElement.scrollHeight,
        document.documentElement.scrollWidth
      )
    );
  }, []);

  const getProject = async () => {
    try {
      const response = await fetch(
        `https://portafolio-latest.vercel.app/api/projects-api?id=${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
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
              onClick={() => router.push(`/${lng}`)}
              className={styles.backButton}
            >
              <ArrowBackIosNewRoundedIcon className={styles.backButtonIcon} />
              <p className={styles.backButtonText}>{t("projects.back")}</p>
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
              <p>{t("projects.notFound")}</p>
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
                onClick={() => router.push(`/${lng}/projects/` + (parseInt(id) - 1))}
              >
                {t("projects.previous")}
              </button>
            )}
            {id === Projects.length.toString() ? null : (
              <button
                className={styles.button_next}
                onClick={() => router.push(`/${lng}/projects/` + (parseInt(id) + 1))}
              >
                {t("projects.next")}
              </button>
            )}
          </div>
        </section>
      </div>
      <Astronaut className={styles.astronaut} />
      <SittingBook className={styles.sitting_book} />
      <BlackWave />
    </div>
  );
}
