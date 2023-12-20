import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useState } from "react";
import MealDrawer from "../MealDrawer/MealDrawer";

export interface MealCardProps {
  name: string;
  category: string;
  description?: string;
  image: string;
}

const RightContent = styled("div")({
  marginLeft: "auto",
});

export default function MealCard(props: MealCardProps) {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const { name, category, description, image } = props;

  return (
    <div>
      <MealDrawer
        isDrawerActive={isDrawerActive}
        setIsDrawerActive={setIsDrawerActive}
        {...props}
      />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 240,
          height: 360,
        }}
      >
        <CardMedia component="img" height="194" image={image} alt={name} />
        <CardContent
          sx={{
            display: "flex",
          }}
        >
          <div>
            <Typography
              variant="h6"
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                lineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {name}
            </Typography>
            <Typography variant="body1">{category}</Typography>
            <Typography variant="body2">{description}</Typography>
          </div>
          <RightContent>
            <StarOutlineIcon style={{ fill: "gold" }} />
          </RightContent>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => setIsDrawerActive(true)}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
