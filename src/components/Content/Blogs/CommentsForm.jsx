import { Button, CardActionArea, CardActions, CardContent, InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik"
import { commentSchema } from "../../constans/commentSchema";
import Grid from "@mui/material/Unstable_Grid2";
import { Face6Rounded, SubjectRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createBlogApi } from "../../../reducers/blogReducer";
import { nanoid } from "@reduxjs/toolkit";

const CommentsForm = () => {
    // const [fullname, setFullname] = useState();
    // const [content, setContent] = useState();
    // const [title, setTitle] = useState();
    const dispatch = useDispatch();

    const contactInputNames = {
        fullname: "",
        title: "",
        content: ""
    }

    // const canSave = [contactInputNames.content, contactInputNames.fullname, contactInputNames.title].every(Boolean);

    const formik = useFormik({
        initialValues: contactInputNames,
        validationSchema: commentSchema,
        onSubmit: (values) => {
            try {
                dispatch(createBlogApi({
                    id: nanoid(),
                    fullname: values.fullname,
                    title: values.title,
                    content: values.content,
                    date: new Date().toISOString(),
                }))
            } catch (error) {
                console.error(error.message)
            }
        }
    })

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit} >
            <CardContent sx={{ backgroundColor: grey[100] }}>
                <Grid container>
                    <Grid xs={12} sx={{ direction: "ltr" }} >
                        <Grid container spacing={1}>

                            <Grid xs={12}>
                                <Grid container>
                                    <Grid xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            label="نام و نام خانوادگی"
                                            name="fullname"
                                            variant="outlined"
                                            helperText={
                                                formik.touched.fullname ? formik.errors.fullname : null
                                            }
                                            error={Boolean(
                                                formik.touched.fullname && formik.errors.fullname
                                            )}
                                            value={formik.values?.fullname}
                                            onChange={formik.handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <Face6Rounded />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            label="عنوان"
                                            name="title"
                                            variant="outlined"
                                            helperText={
                                                formik.touched.title ? formik.errors.title : null
                                            }
                                            error={Boolean(
                                                formik.touched.title && formik.errors.title
                                            )}
                                            value={formik.values?.title}
                                            onChange={formik.handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <SubjectRounded />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid xs={12} >
                                        <TextField
                                            fullWidth
                                            size="small"
                                            label="متن"
                                            name="content"
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            helperText={
                                                formik.touched.content ? formik.errors.content : null
                                            }
                                            error={Boolean(
                                                formik.touched.content && formik.errors.content
                                            )}
                                            value={formik.values?.content}
                                            onChange={formik.handleChange}
                                        />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button type="submit" variant="contained" color="success" fullWidth sx={{ mx: 1, mb: 1 }}>ثبت نظر</Button>
            </CardActions>
        </form>
    );
}

export default CommentsForm;