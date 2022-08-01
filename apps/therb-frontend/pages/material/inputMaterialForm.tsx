import React, { useCallback } from 'react';

// const useStyles = makeStyles((theme: Theme)=>{
//     createStyles({
//         form:{
//             '& > *':{
                
//             }
//         }
//     })
// })
const materials=['insulation','gypsum board','brick'];

const materialKey='material';



export default function InputMaterialForm(): React.ReactElement{
    const { control,setValue } = useFormContext();

    const onChangeMaterial = useCallback((material:string): void=>{
        setValue(materialKey,material)
    },[]);


    //
    // return(
    //     <FormControl>
    //         <InputLabel>
    //             素材
    //         </InputLabel>
    //         <Controller
    //             name={materialKey}
    //             render={({ field }): React.ReactElement =>{
    //                 <Select
    //                     {...field}
    //                     labelId={`${materialKey}-label`}
    //                     id={materialKey}
    //                     options={[
    //                         {value:'test',label:'test'},
    //                         {value:'test1',label:'test1'}
    //                     ]}
                        
    //                     onChange={(e): void=>{
    //                         field.onChange(e);
    //                         onChangeMaterial(e.target.value as string)
    //                         //updateAppState()
    //                     }}
    //                     required
    //                 >
    //                     {materials.map((key)=>{
    //                         <MenuItem key={key} value={key}>
    //                             {key}
    //                         </MenuItem>
    //                     })}
    //                 </Select>
    //             }}
    //             control={control}
    //             rules={{ required:true }}
    //         />
    //     </FormControl>
        
    // )
}