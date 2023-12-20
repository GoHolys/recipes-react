import React from "react";
import useFetch from "../../hooks/useFetch";
import { Meals } from "../Meals/Meals";
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

  console.log(data);

  return (
    <Grid container rowSpacing={4}>
      {data?.meals.map((meal) => (
        <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={2}>
          <MealCard
            category={activeCategory!.strCategory}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        </Grid>
      ))}
    </Grid>
  );
}
