import Grid from "@mui/material/Unstable_Grid2";

const SidebarContainer = ({ children }) => {
    return (
        <Grid xs={0} sm={0} md={3} lg={3} sx={{}}>
            {children}
        </Grid>
    );
}

export default SidebarContainer;