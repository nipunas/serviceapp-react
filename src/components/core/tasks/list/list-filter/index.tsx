import { FormControl, InputLabel, Select } from '@material-ui/core'
import React, { useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem';

export const ListFilter = ({onFilterChange, listFilter}) => {

    const handleListFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      onFilterChange(event.target.value as number);
    };
  
    return (
      <FormControl>
              <InputLabel id="list-filter-select-label">Filter</InputLabel>
              <Select
                labelId="list-filter-select-label"
                id="list-filter-select"
                value={listFilter}
                onChange={handleListFilterChange} >
                <MenuItem value={1}>Card View</MenuItem>
                <MenuItem value={2}>List View</MenuItem>
              </Select>
          </FormControl>
    );
  }