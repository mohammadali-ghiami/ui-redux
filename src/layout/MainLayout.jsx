import { CacheProvider, ThemeProvider } from "@emotion/react";
import { prefixer } from "stylis";
import theme from "../theme/theme";
import Grid  from "@mui/material/Unstable_Grid2";
import createCache from "@emotion/cache";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer],
});

const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{height: "",  backgroundColor: "whitesmoke"}}>
                    {children}
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MainLayout;