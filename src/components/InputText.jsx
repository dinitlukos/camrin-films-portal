// import { IconButton, label } from "yet-another-react-lightbox";
import CheckIcon from "@mui/icons-material/Check";
import {
    IconButton,
    Input,
    InputAdornment
} from "@mui/material";
import { useState } from "react";


const InputText = ({iniitalValue, handleServiceUpdate}) => {

    const [value, setValue] = useState(iniitalValue)
    return <Input
    size="small"
    // defaultValue= {iniitalValue}
    value={value}
    fullWidth
    // readOnly
    onChange={(e)=>{setValue(e.target.value)}}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          onClick={()=>handleServiceUpdate(value)}
          edge="end"
          color="secondary"
        >
          <CheckIcon />
        </IconButton>
      </InputAdornment>
    }
  />
}

export default InputText