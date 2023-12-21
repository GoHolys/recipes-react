import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useState } from "react";
import MealDrawer from "../MealDrawer/MealDrawer";
import { Meal } from "../Meals/Meals";

export interface MealCardProps {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  description?: string;
  strMealThumb: string;
  setFavorites: React.Dispatch<React.SetStateAction<Meal[]>>;
}

const RightContent = styled("div")({
  marginLeft: "auto",
});

export default function MealCard(props: MealCardProps) {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const { setFavorites, ...mealInfo } = props;
  const { idMeal, strMeal, strCategory, description, strMealThumb } = mealInfo;

  return (
    <div>
      <MealDrawer
        isDrawerActive={isDrawerActive}
        setIsDrawerActive={setIsDrawerActive}
        {...mealInfo}
      />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 240,
          height: 360,
        }}
      >
        <CardMedia
          component="img"
          height="194"
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
            <Typography variant="body2">{description}</Typography>
          </div>
          <RightContent>
            <StarOutlineIcon
              style={{ fill: "gold" }}
              onClick={() => {
                setFavorites((currFavorites) => {
                  if (
                    !currFavorites.some(
                      (favorite) => favorite.idMeal === idMeal
                    )
                  ) {
                    return [...currFavorites, mealInfo];
                  }
                  return currFavorites;
                });
              }}
            />
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
