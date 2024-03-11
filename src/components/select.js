import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};



function MultipleSelectPlaceholder({ data, name, handleChange, selectValue }) {


    return (
        <div >
            <FormControl sx={{ width: '100%', borderColor: "#e2e2e2", mb: "20px" }}>
                <Select
                    sx={{
                        "&:focus": {
                            "&& .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#e2e2e2',

                            }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#e2e2e2',
                        },
                        borderRadius: 0, "&:hover": {
                            "&& fieldset": {
                                border: "1px solid #e2e2e2 !important"
                            }
                        },

                    }}
                    className="form__select  "
                    displayEmpty
                    value={selectValue}
                    name={name}
                    onChange={(event) => handleChange(event)}
                    input={<OutlinedInput required />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em className='placeholder'>{data.name}</em>;
                        }

                        return selected
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>{data.name}</em>
                    </MenuItem>
                    {data.value.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default React.memo(MultipleSelectPlaceholder)