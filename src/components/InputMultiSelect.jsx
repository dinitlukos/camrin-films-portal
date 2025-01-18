import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import * as React from 'react';


const InputMultiSelect = ({value, setValue, options}) => {

    // const [value, setValue] = useState(iniitalValue)
    return <Select
    multiple
    value={value}
    onChange={setValue}
    input={<OutlinedInput label="Chip" />}
    renderValue={(selected) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
          <Chip key={value} label={value} />
        ))}
      </Box>
    )}
    // MenuProps={MenuProps}
  >
    {options.map((item) => (
      <MenuItem
        key={item}
        value={item}
        // style={getStyles(name, personName, theme)}
      >
        {item}
      </MenuItem>
    ))}
  </Select>
}

export default InputMultiSelect