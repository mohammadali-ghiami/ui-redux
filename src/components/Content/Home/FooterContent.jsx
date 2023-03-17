import Grid from "@mui/material/Unstable_Grid2"
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Divider from '@mui/material/Divider'
import Comments from "../../../components/common/Comments"

const FooterContent = () => {
    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Grid xs={12} md={12} lg={12} sx={{ mt: query ? 5 : 2, mb: 10 }}>
            <Grid container>
                <Grid xs={12}>
                    <Divider textAlign='left'>
                        <Typography variant='h5'>
                            نظرات اخیر
                        </Typography>
                    </Divider>
                </Grid>
                <Grid xs={12} sx={{ mt: 5 }}>
                    <Comments />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FooterContent;