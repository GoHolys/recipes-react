import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Category } from "../../App";
import AddMealModal from "../AddMealModal/AddMealModal";

interface HeaderProps {
  categories: Category[];
  activeCategory: Category | null;
  searchQuery: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setAddedMeals: React.Dispatch<
    React.SetStateAction<Record<string, Array<Record<string, string>>>>
  >;
}

const HeaderContent = styled("div")({
  display: "flex",
});

export default function Header({
  categories,
  activeCategory,
  setActiveCategory,
  setSearchQuery,
  searchQuery,
  setAddedMeals,
}: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddMealModal
        categories={categories}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAddedMeals={setAddedMeals}
      />
      <h1 className="text-blue-900">Recipes</h1>
      <HeaderContent>
        <Stack direction="row" spacing={4}>
          <Autocomplete
            sx={{ width: 300 }}
            options={categories}
            isOptionEqualToValue={(option, value) =>
              option.strCategory === value.strCategory
            }
            getOptionLabel={(category) => category.strCategory}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
            onChange={(_, newValue) => {
              setSearchQuery("");
              setActiveCategory((prev) => newValue || prev);
            }}
            value={activeCategory}
          />
          <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
            <InputLabel>search</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              value={searchQuery}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActiveCategory(null);
                setSearchQuery(e.target.value);
              }}
              label="search"
            />
          </FormControl>
        </Stack>
        <Button
          variant="contained"
          sx={{ marginLeft: "auto" }}
          onClick={() => setIsModalOpen(true)}
        >
          Add meal
        </Button>
      </HeaderContent>
    </>
  );
}
