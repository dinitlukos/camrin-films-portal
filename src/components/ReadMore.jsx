import { useTheme } from "@mui/material";
import React, { useState } from "react";
 
const ReadMore = ({ children }) => {
    const theme = useTheme()
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    console.log(text)
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 300) : text}
            {text.length >300 && <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: theme.palette.warning.main }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>}
        </p>
    );
};
 
export default ReadMore;