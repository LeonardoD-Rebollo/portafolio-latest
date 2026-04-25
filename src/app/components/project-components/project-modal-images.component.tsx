import { Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../../projects/projects.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface ProjectModalImagesProps {
  open: boolean;
  onClose: () => void;
  imageArray: string[];
  index: number;
}

export default function ProjectModalImages({
  open,
  onClose,
  index,
  imageArray,
}: ProjectModalImagesProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };



  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xl"
    >
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          padding: "0px",
        }}
      >
        <div>
          <div className={styles.close_button_container}>
          <button
            onClick={onClose}
            className={styles.close_button}
          > <CloseRoundedIcon /> </button>
          </div>
        
          <div className={styles.carousel_container}>
         
            {imageArray.map((img, index) => (
              <div
                key={index}
                className={`carousel-slide_xl ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                
              
                <img
                  key={index}
                  src={img}
                  alt={img}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
          <div className={styles.carousel_buttons}>
            <button onClick={prevSlide} className={styles.carouel_button}>
              <ArrowBackIosNewRoundedIcon />
            </button>
            <button onClick={nextSlide} className={styles.carouel_button}>
              <ArrowBackIosNewRoundedIcon  sx={{ transform: "rotate(180deg)" }}/>
            </button>
          </div>
          <div className={styles.carousel_tumbnails_container}>
          <div className={styles.carousel_tumbnails}>
            {imageArray.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={img}
                onClick={() => setCurrentIndex(index)}
                className={index === currentIndex ? styles.thumbnail_active : ""}
              />
            ))}

          </div>
          </div>
       
        </div>
      </DialogContent>
    </Dialog>
  );
}
