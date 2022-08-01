import { Theme } from "@emotion/react";
import { Drawer, Toolbar } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles"
import { useWindowSize } from "../../utils/useWindowSize";
import { SidebarProvider } from "./SidebarContext";

export const sidebarWidth = 240;

const useStyles = makeStyles((theme:Theme)=>
    createStyles({
        drawer: {
            width: sidebarWidth,
            flexShrink:0
        },
        drawerPaper: {
            width:sidebarWidth,
            backgroundColor: 'transparent',
            border: 'none',
            height: 'auto'
        },
        drawerContainer:{
            maxHeight: window.innerHeight,
            overflowX: 'hidden'
        }
    })
)

interface Props {
    title?: string;
    children: React.ReactNode;
    anchor?: 'right'|'left';
    swipeable?: boolean;
}

function SidebarContent({children, title, anchor = 'right', swipeable = true}: Props): React.ReactElement {
    const classes = useStyles();
    const windowSize=useWindowSize();

    return (
        <Drawer 
        className={classes.drawer} 
        variant = "permanent"
        classes = {{
            paper: classes.drawerPaper
        }}
        PaperProps={{style:{maxHeight:windowSize.height}}}
        anchor={anchor}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                {children}
            </div>
                
        </Drawer>
    )
}

export default function Sidebar(props: Props): React.ReactElement{
    return (
        <SidebarProvider>
           <SidebarContent {...props}/> 
        </SidebarProvider>
    )
}