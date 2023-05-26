import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Toybox | ${title}`
    }, [title]);
};

export default useTitle;