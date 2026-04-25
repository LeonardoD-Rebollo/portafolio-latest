import { Chip, Tooltip } from "@mui/material";
import profilePicture from "../../../public/images/profile/Foto.jpg";
import styles from "../page.module.css";
import { Facebook, Linkedin, Mail } from "../../../public/svg-logos/svg-icons";
import { GitHub } from "@mui/icons-material";

const skillsLits = [
    {
        name: "Java"
    },
    {
        name: "C#"
    },
    {
        name: ".NET"
    },
    {
        name: "Typescript"
    },
    {
        name: "HTML"
    },
    {
        name: "CSS"
    },
    {
        name: "JavaScript"
    },
    {
        name: "SQL"
    },
    {
        name: "GitHub"
    },
    {
        name: "Visual Studio Code"
    }, {
        name: "Visual Studio"
    }, {
        name: "Postman"
    }, {
        name: "Anydesk"
    },
    { name: "Next.js" },
    { name: "React.js" },
]
export default function ProfileLine() {

    const CopyToClipboard = () => {
        navigator.clipboard.writeText("9983847681");
    }
    return (
        <div className={styles.profile_section}>
            <div className={styles.profile}>

                <img src={profilePicture.src} alt="Foto de perfil" />
                <h1>Leonardo Daniel Rebollo Calero</h1>
                <section className={styles.description}>
                    <h2>Ingeniero en software</h2>
                    <p>Desarrollador Full-Stack con experiencia en soluciones web y móviles orientadas
                        a la eficiencia operativa. Profesionista con capacidad de transformar ideas de
                        negocio en productos escalables mediante la colaboración ágil con equipos
                        multidisciplinarios. </p>
                    <p>Ingles intermedio [B1]</p>
                </section>

                <h2>Algunas skills</h2>
                <section className={styles.skills}>
                    {
                        skillsLits.map((skill, index) => (
                            <Chip key={index} label={skill.name} variant="outlined" sx={{ color: "white" }} size="small" />
                        ))
                    }
                </section>
                <h2>Otras formas de contacto</h2>
                <section className={styles.contact}>
                    <a href="https://www.facebook.com/profile.php?id=100005401807158" target="_blank">
                        <Facebook className={styles.SocialIcon} />
                    </a>
                    <a href="https://github.com/LeonardoD-Rebollo" target="_blank">
                        <GitHub className={styles.SocialIcon} />
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-daniel-rebollo-calero-a419b2256/" target="_blank">
                        <Linkedin className={styles.SocialIcon} />
                    </a>
                    <a href=" mailto: leonardod.rebollo@gmail.com" target="_blank">
                        <Mail className={styles.SocialIcon} />
                    </a>
                    <Tooltip title="Copiar al portapapeles" placement="right">
                        <Chip label="Tel: (+52) 9983847681" sx={{ color: "white" }} onClick={CopyToClipboard} />
                    </Tooltip>
                </section>
            </div>
        </div>
    );
}