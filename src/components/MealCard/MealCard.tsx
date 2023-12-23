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
import { Category } from "../../App";

export interface MealCardProps {
  meal: Meal;
  activeCategory: Category;
  setFavorites: React.Dispatch<React.SetStateAction<Meal[]>>;
}

const RightContent = styled("div")({
  marginLeft: "auto",
});

export default function MealCard(props: MealCardProps) {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const { setFavorites, meal, activeCategory } = props;
  const { idMeal, strMeal, strCategory, strMealThumb } = meal;


  return (
    <div>
      {idMeal ? (
        <MealDrawer
          isDrawerActive={isDrawerActive}
          setIsDrawerActive={setIsDrawerActive}
          meal={meal}
        />
      ) : (
        <AddedMealDrawer
          isDrawerActive={isDrawerActive}
          setIsDrawerActive={setIsDrawerActive}
          meal={meal}
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
            <Typography variant="body1">
              {strCategory || activeCategory?.strCategory || ""}
            </Typography>
          </div>
          <RightContent
            onClick={() =>
              setFavorites((currFavorites) => {
                if (
                  !currFavorites.some((favorite) => favorite.idMeal === idMeal)
                ) {
                  return [...currFavorites, meal];
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
