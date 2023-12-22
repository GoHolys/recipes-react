import { styled } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";
import Meals from "./components/Meals/Meals";

const categoriesURL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

export interface Category {
  strCategory: string;
}

export interface Categories {
  meals: Category[];
}

const OverallContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "0 100px",
  height: "100%",
});

const HeaderContainer = styled("div")({
  marginBottom: "20px",
});

function App() {
  const { data, loading } = useFetch<Categories>(categoriesURL);
  const [activeCategory, setActiveCategory] = useState<Category | null>({
    strCategory: "Chicken",
  });
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <OverallContainer>
      <HeaderContainer>
        <Header
          categories={data!.meals}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </HeaderContainer>
      <Meals activeCategory={activeCategory} searchQuery={searchQuery} />
    </OverallContainer>
  );
}

export default App;
