import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

import { StarBorder } from "@mui/icons-material";
import { useState } from "react";
import AddedMealDrawer from "../MealDrawer/AddedMealDrawer";
import MealDrawer from "../MealDrawer/MealDrawer";
import { Meal } from "../Meals/Meals";

export interface MealCardProps {
  idMeal: string;
  strMeal: string;
  strCategory: string | undefined;
  description?: string;
  strMealThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strInstructions?: string;
  setFavorites: React.Dispatch<React.SetStateAction<Meal[]>>;
}

const RightContent = styled("div")({
  marginLeft: "auto",
});

export default function MealCard(props: MealCardProps) {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const { setFavorites, ...mealInfo } = props;
  const { idMeal, strMeal, strCategory, strMealThumb } = mealInfo;

  return (
    <div>
      {idMeal ? (
        <MealDrawer
          isDrawerActive={isDrawerActive}
          setIsDrawerActive={setIsDrawerActive}
          {...mealInfo}
        />
      ) : (
        <AddedMealDrawer
          isDrawerActive={isDrawerActive}
          setIsDrawerActive={setIsDrawerActive}
          {...mealInfo}
        />
      )}
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 240,
          height: 310,
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent
          sx={{
            display: "flex",
          }}
        >
          <div>
            <Typography
              variant="h6"
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                lineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {strMeal}
            </Typography>
            <Typography variant="body1">{strCategory}</Typography>
          </div>
          <RightContent
            onClick={() =>
              setFavorites((currFavorites) => {
                if (
                  !currFavorites.some((favorite) => favorite.idMeal === idMeal)
                ) {
                  return [...currFavorites, mealInfo];
                }
                return currFavorites.filter(
                  (listItem) => listItem.idMeal !== idMeal
                );
              })
            }
          >
            <StarBorder style={{ fill: "gold", cursor: "pointer" }} />
          </RightContent>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => setIsDrawerActive(true)}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
