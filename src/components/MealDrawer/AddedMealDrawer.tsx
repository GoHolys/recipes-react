import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Drawer,
  List,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import React, { ReactNode } from "react";
import { MealCardProps } from "../MealCard/MealCard";

interface MealDrawerProps extends Omit<MealCardProps, "setFavorites"> {
  isDrawerActive: boolean;
  setIsDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerBody = styled("div")({
  display: "flex",
  gap: 30,
});

export default function AddedMealDrawer(props: MealDrawerProps) {
  const {
    strCategory,
    strMeal,
    strInstructions,
    strMealThumb,
    isDrawerActive,
    setIsDrawerActive,
  } = props;

  console.log(props);

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
        sx={{ margin: "50px 20px 0px", display: "flex", flexFlow: "column" }}
      >
        <DrawerBody>
          <Box
            component="img"
            sx={{
              height: 167,
              width: 250,
            }}
            alt={strMeal}
            src={strMealThumb}
          />
          <div>
            <Typography align="left" variant="h6" sx={{ textWrap: "nowrap" }}>
              {strMeal}
            </Typography>
            <Typography align="left">{strCategory}</Typography>
            <Typography align="left" variant="body1">
              ingredients
            </Typography>
            <List>
              {[...Array(20)].map((_, i) => {
                return (
                  <ListItemText sx={{ textAlign: "left" }} key={i}>
                    <Typography variant="body2">
                      {
                        props[
                          `strIngredient${i + 1}` as keyof MealDrawerProps
                        ] as ReactNode
                      }
                    </Typography>
                  </ListItemText>
                );
              })}
            </List>
          </div>
        </DrawerBody>
        <Typography align="left" variant="h6">
          Instructions
        </Typography>
        <Typography
          align="left"
          variant="body2"
          sx={{
            wordWrap: "breakWord",
            overflowWrap: "break-word",
          }}
        >
          {strInstructions}
        </Typography>
      </Box>
    </Drawer>
  );
}
