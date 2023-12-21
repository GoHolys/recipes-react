import { Autocomplete, Button, Stack, TextField, styled } from "@mui/material";
import React from "react";
import { Category } from "../../App";

interface HeaderProps {
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
}

const HeaderContent = styled("div")({
  display: "flex",
});

export default function Header({
  categories,
  activeCategory,
  setActiveCategory,
}: HeaderProps) {
  return (
    <>
      <h1 className="text-blue-900">meals</h1>
      <HeaderContent>
        <Stack direction="row" spacing={4}>
          <Autocomplete
            sx={{ width: 300 }}
            options={categories}
            getOptionLabel={(category) => category.strCategory}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
            onChange={(_, newValue) => {
              setActiveCategory(newValue!);
            }}
            value={activeCategory}
          />
          <Autocomplete
            sx={{ width: 300 }}
            options={categories}
            getOptionLabel={(category) => category.strCategory}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
            onChange={(_, newValue) => {
              setActiveCategory(newValue!);
            }}
            value={activeCategory}
          />
        </Stack>
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          Add meal
        </Button>
      </HeaderContent>
    </>
  );
}
