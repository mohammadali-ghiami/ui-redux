import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDispatch } from "react-redux";
import { deleteBlogApi } from "../../../reducers/blogReducer";

const ConfirmDelete = ({ blogId }) => {
    const dispatch = useDispatch();
    const submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <Box className='custom-ui' sx={{ backgroundColor: grey[200], p: 3, borderRadius: 4 }} >
                        <Typography sx={{ fontFamily: "Tanha ,vazir, roboto", mb: 2 }} variant="h5">هشدار</Typography>
                        <Typography sx={{ fontFamily: "Tanha ,vazir, roboto", mb: 2 }} variant="body1">آیا مطمئن هستید که میخواید این پست را پاک کنید؟</Typography>
                        <Button sx={{ fontFamily: "Tanha ,vazir, roboto" }} onClick={onClose}>خیر</Button>
                        <Button
                            color="error"
                            sx={{ fontFamily: "Tanha ,vazir, roboto" }}
                            onClick={() => {
                                dispatch(deleteBlogApi(blogId))
                                onClose();
                            }}
                        >
                            بله
                        </Button>
                    </Box>
                );
            }
        });
    };
    return (
        <div className='container'>
            <Button size="small" color="error" onClick={submit}>حذف پست</Button>
        </div>
    );
}



export default ConfirmDelete;