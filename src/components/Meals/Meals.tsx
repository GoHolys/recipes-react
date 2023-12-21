import { useState } from "react";
import { Category } from "../../App";
import HorizontalMenu from "../HorizontalMenu/HorizontalMenu";
import MealsGrid from "../MealsGrid/MealsGrid";
import { styled } from "@mui/material";

interface MealsProps {
  activeCategory: Category;
  searchQuery: string;
}

export interface Meals {
  meals: Meal[];
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const HorizontalMenuContainer = styled("div")({
  marginBottom: "20px",
});

const MealsContainer = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export default function Meals({ activeCategory, searchQuery }: MealsProps) {
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);
  const [favorites, setFavorites] = useState<Meal[]>([]);

  console.log(favorites);

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
      />
    </MealsContainer>
  );
}
