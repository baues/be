import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import 'react-datasheet/lib/react-datasheet.css';
import { AppProvider, useAppContext } from '../AppContext';
import Datasheet from '../components/DataSheet';
import Layout from '../components/Layout';
import AnalysisParams, { LoadParams } from '../utils/AnalysisParams';
import { makeStyles, Button, Dialog, AppBar, Toolbar, IconButton } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
}));

const props={
    grid: [
        [
          { readOnly: true, value: "" }, 
          { readOnly: true, value: "LPD[W/m2]" }, 
          { readOnly: true, value: "Small Power[W/m2]" }, 
          { readOnly: true, value: "People Density[ppl/m2]" },
        ],
        [
          { readOnly: true, value: "office" }, 
          { value: 12 }, 
          { value: "10" }, 
          { value: "0.1" },
        ],
        [
          { readOnly: true, value: "meeting room" }, 
          { value: "12" }, 
          { value: "10" }, 
          { value: "0.1" },
        ],
      ]
}

export default function Parameter():React.ReactElement {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);
  const { analysisParams, setAnalysisParams } = useAppContext();
  const params = new AnalysisParams(analysisParams);
  const gridData = params.loadToDataSheet();
  const [rowData,setRowData] = useState(gridData.rows);

  //useEffectを使う

  const handleClickOpen = () =>{
    setOpen( true );
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    params.loadFromDataSheet(rowData);
    console.log('arams.toAnalysisParam',params.toAnalysisParam());
    const clone = Object.assign(Object.create(Object.getPrototypeOf(params.toAnalysisParam())), params.toAnalysisParam());
    console.log('clone',clone);
    setAnalysisParams(clone);
  }
  
  //console.log('analysisParams.load',analysisParams.load);
  useEffect(()=>{
    console.log(analysisParams);
  },[analysisParams]);

  return (
    <>
      <Layout>
        <Button variant = "outlined" color= "primary" onClick = { handleClickOpen }>
          Table
        </Button>
        <Dialog fullScreen open={open}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Button onClick={handleSave}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Datasheet initialRows={rowData} columns={gridData.columns}></Datasheet>
        </Dialog>
      </Layout>
    </>
    );
}