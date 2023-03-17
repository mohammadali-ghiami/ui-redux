import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { parseISO, formatDistanceToNow } from "date-fns-jalali";

const ShowTime = ({ timestamp }) => {
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        const time = formatDistanceToNow(date);
        timeAgo = `${time} قبل`
    }   

    return (
        <Typography variant="body2" color={grey[600]}>
            {timeAgo} &nbsp;
        </Typography>
    );
}

export default ShowTime;