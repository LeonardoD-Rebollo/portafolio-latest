import { useState } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ProjectModalImages from "./project-modal-images.component";
import styles from "../../projects/projects.module.css";
export interface ProjectImagesProps {
  data: string[];
}

export default function ProjectImages({ data }: ProjectImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [, setImage] = useState("");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const ImageClick = ({ data }: { data: string}) => {

    setImage(data);
    setOpen(true);
  }

  const CloseModal = () => {
    setOpen(false);
  }


  return (
    <div className={styles.images_container}>


    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
         <ArrowBackIosNewRoundedIcon/>
        </button>
        <ul className="carousel-slides">
          {data.map((img, index) => (
            <li
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={img} alt={`Slide ${index}`} draggable="false" onClick={() => ImageClick({data: img})} />
            </li>
          ))}
        </ul>
        <button className="carousel-btn next" onClick={nextSlide}>
        <ArrowBackIosNewRoundedIcon sx={{transform: "rotate(180deg)"}}/>
        </button>
      </div>
    
    </div>
    <div className={styles.thumbnails_container}>
      {data.map((img, index) => (
        <img
          key={index}
          src={img}
          className={index === currentIndex ? styles.thumbnail_active : ""}
          alt={`Thumbnail ${index}`}
          draggable="false"
          onClick={() => setCurrentIndex(index)}
        />
      ))}
      

    </div>
    <ProjectModalImages imageArray={data} open={open} onClose={CloseModal} index={ currentIndex}/>
    </div>
  );
}
