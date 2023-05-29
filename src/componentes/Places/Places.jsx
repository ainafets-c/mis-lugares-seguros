/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import { getPlaces } from "api/places";
import Notification from "componentes/Notification/Notification";
import PlacesCard from "./PlacesCard";
import { DivPlaces, DivTitle } from "./PlacesStyles";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const callGetPlaces = async () => {
    const [data, status] = await getPlaces();
    if (status !== 200) {
      setNotification({
        open: true,
        message: "Error al consultar los lugares",
        severity: "warning",
      });
      return;
    }

    setPlaces(data);
  };

  useEffect(() => {
    callGetPlaces();
  }, []);

  return (
    <>
      <DivTitle gutterBottom variant="h2" component="div">
        Lugares Seguros
      </DivTitle>
      <DivPlaces>
        {notification.open && (
          <Notification
            notification={notification}
            setNotification={setNotification}
          />
        )}
        {places.map((place) => (
          <PlacesCard place={place} key={place.id} />
        ))}
      </DivPlaces>
    </>
  );
}
