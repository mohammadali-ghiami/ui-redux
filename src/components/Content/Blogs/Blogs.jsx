import { Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import MainLayout from "../../../layout/MainLayout";
import map from "../../../assets/map.svg"
import CommentsForm from "./CommentsForm";
import AllComments from "./AllComments";

const Blogs = () => {
    return (
        <MainLayout>
            <Grid xs={12} sx={{ textAlign: "", m: "0 auto" }}>
                <Card sx={{ maxWidth: "100%", }}>
                    <CardContent>
                        <Box sx={{ my: 6 }}>
                            <Divider>
                                <Chip color="secondary" sx={{ p: 2.5 }} label={
                                    <Typography>
                                        ثبت نظر
                                    </Typography>
                                } />
                            </Divider>
                            <Grid container sx={{ my: 10, height: "" }}>
                                <Grid xs={0} md={6} sx={{
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    }
                                }}>
                                    <Box sx={{
                                        backgroundImage: `url(${map})`, backgroundRepeat: "no-repeat",
                                        textAlign: "center",
                                        backgroundPosition: "center",
                                        height: "200px"
                                    }}>
                                        <Typography sx={{ pt: 4 }}>
                                            نظرتون رو برام بنویسید!😄
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                                        <CommentsForm />
                                    </Card>
                                </Grid>
                            </Grid>
                            <Divider sx={{mb: 2}}>
                                <Chip color="info" sx={{ p: 2.5 }} label={
                                    <Typography>
                                        نظرات
                                    </Typography>
                                } />
                            </Divider>
                            <AllComments/>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </MainLayout >
    );
}

export default Blogs;