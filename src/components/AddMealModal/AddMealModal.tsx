import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useRef, useState, MouseEvent } from "react";
import { Category } from "../../App";

interface AddMealModalProps {
  isModalOpen: boolean;
  categories: Category[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddedMeals: React.Dispatch<
    React.SetStateAction<Record<string, Array<Record<string, string>>>>
  >;
}

export default function AddMealModal({
  isModalOpen,
  categories,
  setIsModalOpen,
  setAddedMeals,
}: AddMealModalProps) {
  const [formData, setFormData] = useState({
    strMeal: "",
    strCategory: "Chicken",
    strInstructions: "",
    ingredients: "",
    strMealThumb: "",
  });

  const ingredientCount = useRef(1);
  const ingredientRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value, id } = event.target as HTMLInputElement;
    setFormData((prevState) => ({
      ...prevState,
      [name]: id === "strIngredient" ? ingredientRef?.current?.value : value,
    }));
  };

  const handleAutocomplete = (value: { strCategory: string }) => {
    setFormData((prevState) => ({
      ...prevState,
      strCategory: value?.strCategory,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddedMeals((currAddedMeals) => ({
      ...currAddedMeals,
      [formData?.strCategory]: [
        ...(currAddedMeals[formData?.strCategory] || []),
        formData,
      ],
    }));
  };

  return (
    <>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl
              sx={{
                width: 1400,
                height: 800,
                bgcolor: "white",
                px: 20,
                pt: 2,
                pb: 5,
              }}
            >
              <Box
                onClick={() => setIsModalOpen(false)}
                sx={{
                  mb: 10,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronLeftIcon />
                <Typography variant="body2" sx={{ marginTop: "2px" }}>
                  Back
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ mb: 10 }}>
                Add Recipe
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Stack spacing={6} sx={{ mr: 5, flex: 3 }}>
                  <TextField
                    onChange={handleChange}
                    label="Meal Name"
                    name="strMeal"
                    sx={{ width: 300 }}
                  />
                  <Autocomplete
                    sx={{ width: 300 }}
                    options={categories}
                    getOptionLabel={(category) => category.strCategory}
                    isOptionEqualToValue={(option, value) =>
                      option.strCategory === value.strCategory
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Categories"
                        name="strCategory"
                      />
                    )}
                    onChange={(_, value) => {
                      handleAutocomplete(value!);
                    }}
                    value={{ strCategory: formData.strCategory }}
                  />
                  <TextField
                    onChange={handleChange}
                    label="Image URL"
                    sx={{ width: 300 }}
                    name="strMealThumb"
                  />
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      inputRef={ingredientRef}
                      label="Ingredients"
                      name={`strIngredient${ingredientCount}`}
                      sx={{ flex: 1, mr: 5, width: 300 }}
                    />
                    <Button
                      name={`strIngredient${ingredientCount.current}`}
                      onClick={(e) => {
                        if (ingredientCount.current <= 20) {
                          handleChange(e);
                          ingredientCount.current++;
                        }
                      }}
                      id="strIngredient"
                      variant="contained"
                    >
                      +
                    </Button>
                  </Box>
                </Stack>
                <TextField
                  onChange={(e) => handleChange(e)}
                  label="Instructions"
                  name="strInstructions"
                  multiline
                  fullWidth
                  sx={{
                    flex: 8,
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "100%",
                    },
                  }}
                  inputProps={{
                    style: {
                      height: "100%",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mt: 5 }}>
                <Button
                  variant="contained"
                  sx={{ float: "right", px: 5 }}
                  type="submit"
                >
                  Add
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </>
  );
}
