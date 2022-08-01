import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'

export default function Legend(){
  return(
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="室温"/>
      <FormControlLabel disabled control={<Checkbox />} label="clodS"/>
    </FormGroup>
  )
}

