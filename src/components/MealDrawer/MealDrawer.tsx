import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Drawer,
  List,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { MealCardProps } from "../MealCard/MealCard";

interface MealDrawerProps extends Omit<MealCardProps, "setFavorites"> {
  isDrawerActive: boolean;
  setIsDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FullMealData {
  dateModified: null | string;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: null | string;
  strDrinkAlternate: null | string;
  strImageSource: null | string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
}

interface FullMealsData {
  meals: FullMealData[];
}

const DrawerBody = styled("div")({
  display: "flex",
  gap: 30,
});

export default function MealDrawer(props: MealDrawerProps) {
  const {
    idMeal,
    strCategory,
    strMeal,
    strMealThumb,
    isDrawerActive,
    setIsDrawerActive,
  } = props;

  const { data, error, loading } = useFetch<FullMealsData>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );

  console.log(data);

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
                  <ListItemText sx={{ textAlign: "left" }}>
                    <Typography variant="body2">
                      {
                        data?.meals[0][
                          `strIngredient${i + 1}` as keyof FullMealData
                        ]
                      }
                    </Typography>
                  </ListItemText>
                );
              })}
            </List>
          </div>
        </DrawerBody>
      </Box>
      <Box sx={{ marginLeft: "20px" }}>
        <Typography align="left" variant="h6">
          Instructions
        </Typography>
        <Typography
          align="left"
          variant="body2"
          sx={{
            wordWrap: "breakWord",
            overflowWrap: "break-word",
            maxWidth: 500,
          }}
        >
          {data?.meals[0].strInstructions}
        </Typography>
      </Box>
    </Drawer>
  );
}
