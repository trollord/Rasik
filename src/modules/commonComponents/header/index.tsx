import { useMediaQuery } from "@mui/material";
import { theme } from '../../../theme';
import { DesktopHeader } from "./index.desktop";
import MobileHeader from "./index.mobile";
export function ResponsiveHeader() {
    const isTablet = useMediaQuery('(min-width:600px) and (max-width:1200px)', { noSsr: true });

    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
    if (isLargeScreen && !isTablet) {
        return <DesktopHeader></DesktopHeader>
    } else {
        return <MobileHeader></MobileHeader>
    }
    

}
