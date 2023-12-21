import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Meal, Meals } from "../Meals/Meals";
import { Category } from "../../App";
import { Box, Grid, styled } from "@mui/material";
import MealCard from "../MealCard/MealCard";
import PaginationMenu from "../PaginationMenu/PaginationMenu";

export const mealsPerPage = 10;

interface MealsGridProps {
  activeCategory: Category;
  isFavoritesActive: boolean;
  favorites: Meal[];
  setFavorites: React.Dispatch<React.SetStateAction<Meal[]>>;
}

const MealGridContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export default function MealsGrid({
  activeCategory,
  isFavoritesActive,
  favorites,
  setFavorites,
}: MealsGridProps) {
  const { data, error, loading } = useFetch<Meals>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory?.strCategory}`
  );

  const [currentPage, setCurrentPage] = useState(1);

  const mealsCount = isFavoritesActive ? favorites.length : data?.meals.length;

  const lastMealIndex = currentPage * mealsPerPage;
  const firstMealIndex = lastMealIndex - mealsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [isFavoritesActive]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <MealGridContainer>
        <Grid container rowSpacing={4}>
          {(isFavoritesActive
            ? favorites.slice(firstMealIndex, lastMealIndex)
            : data?.meals.slice(firstMealIndex, lastMealIndex)
          )?.map((meal) => (
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={2.2}>
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
      </MealGridContainer>
      <Box
        sx={{
          alignSelf: "end",
          marginTop: "auto",
        }}
      >
        <PaginationMenu
          mealsCount={mealsCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Box>
  );
}
