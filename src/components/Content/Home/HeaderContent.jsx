import Grid from "@mui/material/Unstable_Grid2"
import { Typography, useMediaQuery, Box } from '@mui/material'
import { useTheme } from "@emotion/react";
import avatar from "../../../assets/design.jpg"

const HeaderContent = () => {
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down("lg"))

    const Style = () => {
        if (query) {
            return (
                <Box component="img" src={avatar} sx={{
                    width: "75vw",
                    height: "45vh"
                }} />
            )
        } else {
            return (
                <Box component="img" src={avatar} sx={{
                    width: "30vw",
                }} />
            )
        }
    }

    return (
        <Grid xs={12} md={12} lg={12} >
            <Grid container>

                <Grid xs={12} md={12} lg={7} sx={{ mt: query ? 5 : 10, p: 3 }}>
                    <Grid container>
                        <Grid sx={0} md={1} />


                        <Grid sx={12} md={11}>
                            <Typography variant='h4' color="gray" sx={{ mb: 5 }}>
                                طراحی سایت
                            </Typography>
                            <Typography variant='body1' color="gray" sx={{ textJustify: "revert" }}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} md={12} lg={5} sx={{ mt: query ? 0 : 10, p: 0, backgroundColor: "whitesmoke" }}>
                    <Grid xs={12} md={12} sx={{ alignItems: "center", overflow: "", display: "flex", justifyContent: "center", height: "400px" }}>
                        <Style />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HeaderContent;