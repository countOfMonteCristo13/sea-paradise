import { useEffect, useState } from "react";

interface useShowSectionAnimation{
    sectionId:string;
    threshold?:number;
}

const useShowSectionAnimation = ({sectionId,threshold = 0.3}:useShowSectionAnimation) => {
    const [isVisible,setIsVisible] = useState(false);

    useEffect(() => {
        const target = document.getElementById(sectionId);
        if (!target) return;
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              } else if (!entry.isIntersecting && window.scrollY > entry.boundingClientRect.top) {
                setIsVisible((prev) => prev);
              }
            });
          },
          { threshold }
        );
    
        observer.observe(target);
    
        return () => observer.disconnect();
      }, [sectionId, threshold]);
    
      return isVisible;
}

export default useShowSectionAnimation
