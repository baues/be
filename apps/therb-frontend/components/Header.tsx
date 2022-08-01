
import { Theme } from '@emotion/react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles, createStyles } from "@mui/styles"

import Link from 'next/link';

const useStayles=makeStyles((theme: Theme)=>
    createStyles({
        root:{
            display: 'flex',
            flex:1
        }
    })
)
export default function Header():React.ReactElement{
    const classes = useStayles();
    
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" style={{ marginRight: 50 }}>
                        THERB 2.0
                    </Typography>
                    <Link href={'/projects'}>
                        <Typography style={{ marginRight: 16 }}>
                            Projects
                        </Typography>
                    </Link>
                    {/* <Typography style={{ marginRight: 16 }}>
                        Settings
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}