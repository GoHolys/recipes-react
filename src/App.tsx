import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";
import Meals from "./components/Meals/Meals";
import useDebounce from "./hooks/useDebounce";

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
  const { debouncedSearch } = useDebounce(searchQuery);
  const [addedMeals, setAddedMeals] = useState(
    JSON.parse(localStorage.getItem("addedMeals") || "{}")
  );


  useEffect(() => {
    localStorage.setItem("addedMeals", JSON.stringify(addedMeals));
  }, [addedMeals]);

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
          setAddedMeals={setAddedMeals}
        />
      </HeaderContainer>
      <Meals
        activeCategory={activeCategory}
        searchQuery={debouncedSearch}
        addedMeals={addedMeals}
      />
    </OverallContainer>
  );
}

export default App;
