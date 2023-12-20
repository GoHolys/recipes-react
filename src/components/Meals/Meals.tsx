import { useState } from "react";
import { Category } from "../../App";
import HorizontalMenu from "../HorizontalMenu/HorizontalMenu";
import MealsGrid from "../MealsGrid/MealsGrid";
import { styled } from "@mui/material";

interface MealsProps {
  activeCategory: Category;
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

export default function Meals({ activeCategory }: MealsProps) {
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);

  return (
    <div>
      <HorizontalMenuContainer>
        <HorizontalMenu
          isFavoritesActive={isFavoritesActive}
          setIsFavoritesActive={setIsFavoritesActive}
        />
      </HorizontalMenuContainer>
      <MealsGrid
        activeCategory={activeCategory}
        isFavoritesActive={isFavoritesActive}
      />
    </div>
  );
}
