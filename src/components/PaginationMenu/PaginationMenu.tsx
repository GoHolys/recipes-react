import { Pagination } from "@mui/material";
import { mealsPerPage } from "../MealsGrid/MealsGrid";
import { calcPagesNumber } from "../../utils/calcPagesNumber";


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
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Pagination
      page={currentPage}
      count={calcPagesNumber(mealsCount!, mealsPerPage)}
      onChange={handleChange}
    />
  );
}
