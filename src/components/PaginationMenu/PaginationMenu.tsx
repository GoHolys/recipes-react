import { Pagination } from "@mui/material";
import { mealsPerPage } from "../MealsGrid/MealsGrid";

interface PaginationMenuProps {
  currentPage: number;
  mealsCount: number | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationMenu({
  currentPage,
  mealsCount,
  setCurrentPage,
}: PaginationMenuProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Pagination
      page={currentPage}
      count={Math.ceil(mealsCount! / mealsPerPage)}
      onChange={handleChange}
    />
  );
}
