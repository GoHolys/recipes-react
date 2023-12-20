import { Box, Typography } from "@mui/material";
import React from "react";

interface HorizontalMenuProps {
  isFavoritesActive: boolean;
  setIsFavoritesActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HorizontalMenu({
  isFavoritesActive,
  setIsFavoritesActive,
}: HorizontalMenuProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Typography
        sx={{
          minWidth: 100,
          borderBottom: "solid",
          borderColor: !isFavoritesActive ? "primary.main" : "black",
          cursor: "pointer",
        }}
        onClick={() => setIsFavoritesActive(false)}
      >
        All meals
      </Typography>
      <Typography
        sx={{
          minWidth: 100,
          borderBottom: "solid",
          borderColor: isFavoritesActive ? "primary.main" : "black",
          cursor: "pointer",
        }}
        onClick={() => setIsFavoritesActive(true)}
      >
        Favorites
      </Typography>
    </Box>
  );
}
