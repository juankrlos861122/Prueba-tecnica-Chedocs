import {
  Dialog,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

interface Props {
  data: {
    title: string;
    description: string;
    programType: string;
    releaseYear: number;
    images: {
      "Poster Art": {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

const ImageCard: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="hover:cursor-pointer hover:opacity-80" onClick={handleOpen}>
        <img
          src={data.images["Poster Art"].url}
          alt={data.title}
          className=" hover:border-4 border-white"
        />
        <h3 className="font-bold uppercase text-center">{data.title}</h3>
      </div>

      <Dialog
        open={open}
        sx={{ backgroundColor: "rgb(128, 128, 128,0.7)" }}
        onClose={handleClose}
      >
        <Card sx={{ display: "flex", width: "100%" }}>
          <Box>
            <CardMedia
              component="img"
              sx={{ height: "100%" }}
              image={data.images["Poster Art"].url}
              title={data.title}
            />
          </Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flex: "1 0 auto",
                justifyContent: "space-between",
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" component="div">
                {data.releaseYear}
              </Typography>
            </Box>
            <Typography
              sx={{ textAlign: "justify" }}
              variant="body1"
              component="div"
            >
              {data.description}
            </Typography>
          </CardContent>
        </Card>
      </Dialog>
    </>
  );
};

export default ImageCard;
