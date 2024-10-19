import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getCategoryProducts } from "../services/api";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Container,
} from "@mui/material";

const ProductCard = ({ product }) => {
  console.log("key: " + product.id)
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/products/${product.id}`)
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginRight: 2,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={product.image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CategorySection = ({ category }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Container>
      <h4>{category.name}</h4>
      <Carousel responsive={responsive}>
        {category.products.map((product) => (
          <ProductCard
            product={product}
          />
        ))}
      </Carousel>
    </Container>
  );
};

const CategoryProducts = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await getCategoryProducts(accessToken);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchCategoryProducts();
  }, []);

  return (
    <div>
      {/* Display categories */}
      <div>
        {categories.map((category) => (
          <CategorySection category={category} />
        ))}
      </div>
      ;
    </div>
  );
};

export default CategoryProducts;
