import { Box, Drawer, Typography, styled } from "@mui/material";
import React from "react";
import { MealCardProps } from "../MealCard/MealCard";
import CloseIcon from "@mui/icons-material/Close";

interface MealDrawerProps extends MealCardProps {
  isDrawerActive: boolean;
  setIsDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerBody = styled("div")({
  display: "flex",
  gap: 30,
});

export default function MealDrawer(props: MealDrawerProps) {
  const {
    name,
    category,
    description,
    image,
    isDrawerActive,
    setIsDrawerActive,
  } = props;

  return (
    <Drawer
      anchor={"right"}
      open={isDrawerActive}
      onClose={() => setIsDrawerActive(false)}
    >
      <CloseIcon
        sx={{ marginTop: "10px", marginLeft: "10px", cursor: "pointer" }}
        onClick={() => setIsDrawerActive(false)}
      />
      <Box
        width="500px"
        textAlign="center"
        role="presentation"
        sx={{ margin: "100px 20px" }}
      >
        <DrawerBody>
          <Box
            component="img"
            sx={{
              height: 167,
              width: 250,
            }}
            alt={name}
            src={image}
          />
          <div>
            <Typography align="left" variant="h6" sx={{ textWrap: "nowrap" }}>
              {name}
            </Typography>
            <Typography align="left">{category}</Typography>
          </div>
        </DrawerBody>
      </Box>
    </Drawer>
  );
}
