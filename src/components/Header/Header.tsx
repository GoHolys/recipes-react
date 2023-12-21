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
import React from "react";
import { Category } from "../../App";

interface HeaderProps {
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderContent = styled("div")({
  display: "flex",
});

export default function Header({
  categories,
  activeCategory,
  setActiveCategory,
  setSearchQuery,
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
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              label="search"
            />
          </FormControl>
        </Stack>
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          Add meal
        </Button>
      </HeaderContent>
    </>
  );
}
