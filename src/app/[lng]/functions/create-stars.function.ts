import { Star } from "../page";

export function createStars (count: number, scrollHeight: number, scrollWidth: number) {
    
    const pageHeight = scrollHeight;
    const pageWidth = scrollWidth;
    const generatedStars: Star[] = [];

    for (let i = 0; i < count; i++) {
      generatedStars.push({
        top: Math.random() * pageHeight,
        left: Math.random() * pageWidth,
      });
    }

    return generatedStars
  };