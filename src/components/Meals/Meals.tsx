import { useEffect, useState } from "react";
import { Category } from "../../App";
import HorizontalMenu from "../HorizontalMenu/HorizontalMenu";
import MealsGrid from "../MealsGrid/MealsGrid";
import { styled } from "@mui/material";

interface MealsProps {
  activeCategory: Category | null;
  searchQuery: string;
  addedMeals: Record<string, Array<Record<string, string>>>;
}

export interface Meals {
  meals: Meal[];
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
}

const HorizontalMenuContainer = styled("div")({
  marginBottom: "20px",
});

const MealsContainer = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export default function Meals({
  activeCategory,
  searchQuery,
  addedMeals,
}: MealsProps) {
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);
  const [favorites, setFavorites] = useState<Meal[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MealsContainer>
      <HorizontalMenuContainer>
        <HorizontalMenu
          isFavoritesActive={isFavoritesActive}
          setIsFavoritesActive={setIsFavoritesActive}
        />
      </HorizontalMenuContainer>
      <MealsGrid
        activeCategory={activeCategory}
        isFavoritesActive={isFavoritesActive}
        favorites={favorites}
        setFavorites={setFavorites}
        searchQuery={searchQuery}
        addedMeals={addedMeals}
      />
    </MealsContainer>
  );
}
