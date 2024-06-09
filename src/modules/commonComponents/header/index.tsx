import { useMediaQuery } from "@mui/material";
import { theme } from '../../../theme';
import { DesktopHeader } from "./index.desktop";
import MobileHeader from "./index.mobile";
export function ResponsiveHeader() {
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
    if (isLargeScreen) {
        return <DesktopHeader></DesktopHeader>
    } else {
        return <MobileHeader></MobileHeader>
    }

}
