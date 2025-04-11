/** @format */

import React from "react";
import { Button, CircularProgress, ButtonProps } from "@mui/material";
import { defaultTheme } from "../../../constants/theme/theme";

// Define the prop types for the PrimaryButton component
interface PrimaryButtonProps extends ButtonProps {
  isLoading?: boolean;
  sx?: object; // You can further refine this if needed, depending on your use case
  startIcon?: React.ReactNode; // Optional: Allows you to add an icon at the start
  endIcon?: React.ReactNode; // Optional: Allows you to add an icon at the end
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  sx,
  isLoading,
  startIcon,
  endIcon,
  ...otherProps
}) => {
  return (
    <Button
      variant='contained'
      className='capitalize'
      color='warning'
      startIcon={startIcon} // Optional start icon
      endIcon={endIcon} // Optional end icon
      sx={{
        background: defaultTheme.backgrounds.primary,
        color: defaultTheme.colors.tertiary,
        alignItems: "center", // Center both text and icon vertically
        justifyContent: "center", // Center content horizontally
        borderRadius: "5px 20px",
        padding: "12px 24px",
        fontSize: "1rem",
        textTransform: "capitalize",
        textWrap: "nowrap",
        height: "48px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        display: "flex", // Use flexbox to align content
        gap: "1px", // Optional gap between icon and text
        ...sx, // Allows the user to override styles using the sx prop
      }}
      {...otherProps}
    >
      {isLoading && <CircularProgress size={20} className='me-2 text-white' />}
      {children}
    </Button>
  );
};

export default PrimaryButton;
