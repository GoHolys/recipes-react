import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface mealCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
}

export default function mealCard({
  name,
  category,
  description,
  image,
}: mealCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h3">{category}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
