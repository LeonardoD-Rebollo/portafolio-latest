import { Chip, Tooltip } from "@mui/material";
import profilePicture from "../../../../public/images/profile/Foto.jpg";
import styles from "../page.module.css";
import { Facebook, Linkedin, Mail, WhatsApp } from "../../../../public/svg-logos/svg-icons";
import { GitHub } from "@mui/icons-material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useTranslation } from "react-i18next";

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
    {
        name: "Docker"
    },
    {
        name: "Git"
    },
    {
        name: "Trello"
    },
    {
        name: "Azure"
    },
    {
        name: "AWS"
    },
    { name: "Next.js" },
    { name: "React.js" },
]
export default function ProfileLine() {
    const { t } = useTranslation();
    const CopyToClipboard = () => {
        navigator.clipboard.writeText("529983847681");
    }
    return (
        <div className={styles.profile_section}>
            <div className={styles.profile}>

                <img src={profilePicture.src} alt="Foto de perfil" />
                <h1>Leonardo Daniel Rebollo Calero</h1>
                <section className={styles.description}>
                    <h2>{t("profile.carrer")}</h2>
                    <p>{t("profile.sumary")}</p>
                    <p>{t("profile.english")}</p>
                </section>

                <h2>{t("profile.skills.title")}</h2>
                <section className={styles.skills}>
                    {
                        skillsLits.map((skill, index) => (
                            <Chip key={index} label={skill.name} variant="outlined" className={styles.chip} size="small" />
                        ))
                    }
                </section>
                <h2>{t("profile.contact.title")}</h2>
                <section className={styles.contact}>
                    <a href="https://wa.me/529983847681" target="_blank">
                        <WhatsApp className={styles.SocialIcon} />
                    </a>
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
                    <Tooltip title={t("tooltip.copy")} placement="right" onClick={CopyToClipboard} >
                        <div className={styles.profile_phone}>
                            <LocalPhoneIcon />
                            <div className={styles.profile_phone_chip}>
                                <Chip label="Tel: (+52) 9983847681" sx={{ color: "white" }}  />
                            </div>
                            
                        </div>
                    </Tooltip>
                </section>
            </div>
        </div>
    );
}