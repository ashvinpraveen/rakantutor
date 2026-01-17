import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                // Delay slightly to ensure content is rendered, especially with BlurFade animations
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            // Scroll to top if no hash and path changes
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
