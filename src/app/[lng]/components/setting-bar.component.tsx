"use client";

import styles from "../page.module.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import MenuIcon from '@mui/icons-material/Menu';
import { SpainFlag, UkFlag } from "../../../../public/svg-logos/svg-icons";
import { useEffect, useState } from "react";
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";


const SettingBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <div className={styles.setting_bar}>
            <div className={styles.setting_bar_icon} onClick={() => setShowMenu(!showMenu)}>
                <IconButton icon={<MenuIcon />} />
            </div>
            <div className={`${styles.setting_bar_container} ${showMenu ? styles.show_menu : ""}`}>
                <DarkModeSelector />
                <LanguageSelector />
            </div>
        </div>
    )
}

export default SettingBar

const DarkModeSelector = () => {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div >
            <Select

                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={styles.custom_select}
            >
                <MenuItem value="dark"><DarkModeIcon /> <span className={styles.label_settings}>{t("settings.bar.themes.dark")}</span></MenuItem>
                <MenuItem value="light"><LightModeIcon /> <span className={styles.label_settings}>{t("settings.bar.themes.light")}</span></MenuItem>

                <MenuItem value="system"><Brightness5Icon /> <span className={styles.label_settings}>{t("settings.bar.themes.system")}</span></MenuItem>
            </Select>
        </div>
    );
}

const LanguageSelector = () => {
    const pathname = usePathname();
    const router = useRouter();

    const changeLanguage = (
        language: string
    ) => {
        const segments = pathname.split("/");

        segments[1] = language;

        router.push(segments.join("/"));
    };


    return (
        <div>
            <Select
                value={pathname.split("/")[1]}
                onChange={(e) => changeLanguage(e.target.value as string)}
                className={styles.custom_select}
            >

                <MenuItem value="es"><SpainFlag width={20} height={20} /></MenuItem>
                <MenuItem value="en"><UkFlag width={20} height={20} /></MenuItem>
            </Select>
        </div>
    );
}

const IconButton = ({ icon }: { icon: React.ReactNode }) => {

    return (
        <div className={styles.icon}>
            {icon}
        </div>
    )
}
