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
  addedMeals: Record<string, Array<Meal>>;
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
  addedMeals,
}: MealsGridProps) {
  const { data } = useFetch<Meals>(
    searchQuery
      ? `https:www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory?.strCategory}`
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [isFavoritesActive, searchQuery, activeCategory]);

  const mealsCount = isFavoritesActive ? favorites.length : data?.meals?.length;

  const lastMealIndex = currentPage * mealsPerPage;
  const firstMealIndex = lastMealIndex - mealsPerPage;

  const currentData = isFavoritesActive
    ? favorites
    : [
        ...(data?.meals || []),
        ...(addedMeals[activeCategory?.strCategory || ""] || []),
      ];

  if (currentData?.length === 0) {
    <h1>No Data</h1>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <MealGridContainer>
        <Grid container rowSpacing={4}>
          {currentData?.slice(firstMealIndex, lastMealIndex).map((meal, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} lg={2.2}>
              <MealCard
                setFavorites={setFavorites}
                activeCategory={activeCategory!}
                meal={meal}
              />
            </Grid>
          ))}
        </Grid>
      </MealGridContainer>
      <Box
        sx={{
          alignSelf: "center",
          marginTop: "auto",
          marginBottom: "20px",
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
