import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Meal, Meals } from "../Meals/Meals";
import { Category } from "../../App";
import { Box, Grid, styled } from "@mui/material";
import MealCard from "../MealCard/MealCard";
import PaginationMenu from "../PaginationMenu/PaginationMenu";

export const mealsPerPage = 10;

interface MealsGridProps {
  activeCategory: Category | null;
  isFavoritesActive: boolean;
  favorites: Meal[];
  setFavorites: React.Dispatch<React.SetStateAction<Meal[]>>;
  searchQuery: string;
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
  searchQuery,
}: MealsGridProps) {
  const { data, error, loading } = useFetch<Meals>(
    searchQuery
      ? `https:www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory?.strCategory}`
  );

  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [isFavoritesActive, searchQuery]);

  const mealsCount = isFavoritesActive ? favorites.length : data?.meals?.length;

  const lastMealIndex = currentPage * mealsPerPage;
  const firstMealIndex = lastMealIndex - mealsPerPage;

  const currentData = isFavoritesActive ? favorites : data?.meals;

  if (currentData?.length === 0) {
    <h1>No Data</h1>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <MealGridContainer>
        <Grid container rowSpacing={4}>
          {currentData?.slice(firstMealIndex, lastMealIndex).map((meal) => (
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4} lg={2.2}>
              <MealCard
                strMeal={meal.strMeal}
                strCategory={activeCategory?.strCategory}
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
          alignSelf: "center",
          my: "auto",
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
