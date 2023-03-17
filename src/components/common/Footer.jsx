import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
const Footer = () => {
    return (
        <Grid container sx={{ backgroundColor: grey[900] }}>
            <Grid xs={6} md={3} sx={{ px: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", py: 5 }}>
                    <Typography variant="h6" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 3 }}>
                        طراحی سایت
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha" }}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6} md={3} sx={{ px: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", py: 5 }}>
                    <Typography variant="h6" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 3 }}>
                        ارتباط با ما
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6} md={3} sx={{ px: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", py: 5 }}>
                <Typography variant="h6" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 3 }}>
                        ارتباط با ما
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6} md={3} sx={{ px: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", py: 5 }}>
                <Typography variant="h6" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 3 }}>
                        ارتباط با ما
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center", color: "whitesmoke", fontFamily: "Tanha", mb: 2 }}>
                        لورم ایپسوم متن ساختگی
                    </Typography>
                </Box>
            </Grid>

        </Grid>
    );
}

export default Footer;