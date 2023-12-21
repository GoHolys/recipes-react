import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Meal, Meals } from "../Meals/Meals";
import { Category } from "../../App";
import { Grid } from "@mui/material";
import MealCard from "../MealCard/MealCard";

interface MealsGridProps {
  activeCategory: Category;
  isFavoritesActive: boolean;
}

export default function MealsGrid({
  activeCategory,
  isFavoritesActive,
}: MealsGridProps) {
  const { data, error, loading } = useFetch<Meals>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory?.strCategory}`
  );

  const [favorites, setFavorites] = useState<Meal[]>([]);

  return (
    <Grid container rowSpacing={4}>
      {(isFavoritesActive ? favorites : data?.meals)?.map((meal) => (
        <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={2}>
          <MealCard
            strMeal={meal.strMeal}
            strCategory={activeCategory!.strCategory}
            strMealThumb={meal.strMealThumb}
            idMeal={meal.idMeal}
            setFavorites={setFavorites}
          />
        </Grid>
      ))}
    </Grid>
  );
}
