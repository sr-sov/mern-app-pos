import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";

export const ItemFormText = ({ name, control, label, itemName, handleItemNameChange }) => {
  return (
    <>
    <Controller
    name={name}
    control={control}
    render={({
        field: {onChange, value},
        fieldState: { error },
        formState,
    }) => (
        <TextField 
        label={label}
        variant="outlined" 
        type="text"
        value={itemName}
        onChange={handleItemNameChange}
        error
        helperText="some validation errors"
        sx={{
        gridColumn: "span 6"
        }}>
        </TextField>
    )
    }
    />

    </>
  )
}