import PropTypes from "prop-types";
import { CardContent, Divider } from "@mui/material";
import {
  MyActions,
  MyCard,
  MyAddress,
  MyButton,
  MyMedia,
  MyName,
  MyDescription,
} from "./PlacesCardStyles";

export default function PlacesCard({ place }) {
  return (
    <MyCard>
      <CardContent sx={{ padding: 0 }}>
        <MyMedia
          name="imagenLugar"
          component="img"
          height="200"
          image={place.image}
          alt="imagen del lugar"
        />

        <MyName name="nombreLugar" gutterBottom variant="h6" component="div">
          {place.name}
        </MyName>

        <MyAddress
          name="direccionLugar"
          gutterBottom
          variant="caption"
          component="div"
        >
          {place.address_street}, {place.address_colonia}
          <br />
          {place.address_city}, {place.address_state} - {place.address_zipcode}
        </MyAddress>

        <Divider variant="middle" color="#f7d1cd" />

        <MyDescription
          name="descripcionLugar"
          variant="caption"
          color="text.secondary"
        >
          {place.description}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quod
          quaerat velit, sint amet nemo aspernatur asperiores dolorem
          voluptatibus et dolorum explicabo neque quae in illo inventore quas
          itaque minus.
        </MyDescription>
      </CardContent>

      <MyActions>
        <MyButton underline="hover" variant="inherit">
          Ver comentarios
        </MyButton>
      </MyActions>
    </MyCard>
  );
}

PlacesCard.propTypes = {
  place: PropTypes.shape([]).isRequired,
};
