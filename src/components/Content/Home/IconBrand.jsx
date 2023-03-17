import { Chip, Typography, Divider } from "@mui/material";
import Grid  from "@mui/material/Unstable_Grid2";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
const IconBrand = () => {
    return (
        <Grid xs={12} sx={{ height: '10vh' }}>
        <Grid container>
          <Grid xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Chip icon={<EqualizerIcon />} color="primary" sx={{ p: 2.5 }} label={
              <Typography>کیفیت بالا</Typography>
            } />
          </Grid>
          <Grid xs={6} md={3} sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <Chip icon={<CheckCircleIcon />} color="success" sx={{ p: 2.5 }} label={
              <Typography>طراحی حرفه‌ایی </Typography>
            } />
            <Divider sx={{ "&::before , &::after": { borderColor: "black" } }} />
          </Grid>
          <Grid xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Chip icon={<CodeIcon />} color="secondary" sx={{ p: 2.5 }} label={
              <Typography>Clean code</Typography>
            } />
          </Grid>
          <Grid xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Chip icon={<DeveloperModeIcon />} color="info" sx={{ p: 2.5 }} label={
              <Typography>Responsive</Typography>
            } />
          </Grid>
        </Grid>
      </Grid>
    );
}
 
export default IconBrand;