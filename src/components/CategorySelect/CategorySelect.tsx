import { Autocomplete, TextField } from "@mui/material";
import { Category } from "../../App";

interface CategorySelectProps {
  categories: Category[];
  activeCategory: Category;
  width: string | number;
  handleChange: (newValue: Category) => void;
  fn?: () => void;
}

export default function CategorySelect({
  categories,
  activeCategory,
  width,
  handleChange,
  fn,
}: CategorySelectProps) {
  return (
    <Autocomplete
      sx={{ width }}
      options={categories}
      getOptionLabel={(category) => category.strCategory}
      renderInput={(params) => <TextField {...params} label="Categories" />}
      onChange={(_, newValue) => {
        fn?.();
        handleChange(newValue!);
      }}
      value={activeCategory}
    />
  );
}
