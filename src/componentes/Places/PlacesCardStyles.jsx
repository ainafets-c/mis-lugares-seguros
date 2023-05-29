import {
  styled,
  Card,
  Link,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";

export const MyCard = styled(Card)({
  width: "445px",
  height: "450px",
  margin: "20px",
  padding: "0",
  alignItems: "center",
  backgroundColor: "#735d78",
  borderRadius: "15px",
});

export const MyMedia = styled(CardMedia)({
  objectFit: "contain",
  backgroundColor: "whitesmoke",
  marginBottom: "3px",
  padding: "5px",
});

export const MyName = styled(Typography)({
  color: "#f7ede2",
  fontWeight: "bold",
  margin: "3px",
});

export const MyAddress = styled("p")({
  height: "45px",
  fontSize: "12px",
  margin: "0px",
  color: "#dedbd2",
});

export const MyDescription = styled(Typography)({
  display: "inline-block",
  textAlign: "justify",
  overflow: "auto",
  height: "90px",
  fontSize: "12px",
  margin: "5px 20px 5px 20px",
  color: "#dedbd2",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "1px solid slategrey",
  },
});

export const MyButton = styled(Link)({
  textTransform: "capitalize",
  color: "#e8c2ca",
  fontSize: "15px",
});

export const MyActions = styled(CardActions)({
  justifyContent: "right",
  paddingRight: "16px",
});
