
import { Chip } from "@mui/material";
import { NextIcon } from "../../../../public/svg-logos/svg-icons";
import styles from "../page.module.css";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div 
            style={{ display: "flex", justifyContent: "center", 
            alignItems: "center", gap: "10px", backgroundColor: "black", position: "relative", zIndex: "1" }}>
            <p>Powered by</p>
            <NextIcon className={styles.svgIcon} />
            </div>
            <div>© Leonardo Daniel Rebollo Calero 2026  <Chip label="v2.0" variant="outlined" sx={{ color: "white"}} size="small"/></div>
        </footer>
    );
}

export default Footer
