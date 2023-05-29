import { React, useState } from "react";
import {
  DivFormSecurePlace,
  FormFormSecurePlace,
  TextFieldFormSecurePlace,
  ButtonFormSecurePlace,
} from "./FormSecurePlaceStyles";

export default function FormSecurePlace() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    state: "",
    street: "",
    suburb: "",
    number: "",
  });

  const [formError, setFormError] = useState({
    name: { error: false, message: "" },
    description: { error: false, message: "" },
    state: { error: false, message: "" },
    street: { error: false, message: "" },
    suburb: { error: false, message: "" },
    number: { error: false, message: "" },
  });

  const [loading, setLoading] = useState(false);

  const handleValidation = () => {
    const regExpNumber = /^\d{1,6}$/;
    const { name, description, state, street, suburb, number } = form;
    const internalForm = { ...formError };
    let isCorrect = true;

    if (name === "") {
      internalForm.name.error = true;
      internalForm.name.message = "Completa el nombre";
      isCorrect = false;
    } else {
      internalForm.name.error = false;
      internalForm.name.message = "";
    }

    if (description === "") {
      internalForm.description.error = true;
      internalForm.description.message = "Completa la descripcion";
      isCorrect = false;
    } else {
      internalForm.description.error = false;
      internalForm.description.message = "";
    }

    if (state === "") {
      internalForm.state.error = true;
      internalForm.state.message = "Completa el estado";
      isCorrect = false;
    } else {
      internalForm.state.error = false;
      internalForm.state.message = "";
    }

    if (street === "") {
      internalForm.street.error = true;
      internalForm.street.message = "Completa la calle";
      isCorrect = false;
    } else {
      internalForm.street.error = false;
      internalForm.street.message = "";
    }

    if (suburb === "") {
      internalForm.suburb.error = true;
      internalForm.suburb.message = "Completa la colonia";
      isCorrect = false;
    } else {
      internalForm.suburb.error = false;
      internalForm.suburb.message = "";
    }

    if (number === "") {
      internalForm.number.error = true;
      internalForm.number.message = "Completa el numero";
      isCorrect = false;
    } else if (!regExpNumber.test(number)) {
      internalForm.number.error = true;
      internalForm.number.message = "Solo se aceptan numeros";
    } else {
      internalForm.number.error = false;
      internalForm.number.message = "";
    }

    setFormError(internalForm);
    setLoading(!isCorrect);
    return isCorrect;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFine = handleValidation();
    if (allFine) {
      setLoading(true);
      console.log("Enviando datos");
    }
  };

  const handleChange = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    const internalForm = form;
    internalForm[nameInput] = valueInput;
    setForm(internalForm);
  };

  return (
    <DivFormSecurePlace>
      <FormFormSecurePlace onSubmit={handleSubmit}>
        <h1>Lugares Seguros</h1>

        <TextFieldFormSecurePlace
          error={formError.name.error}
          helperText={formError.name.error && formError.name.message}
          id="outlined-basic"
          label="Nombre"
          name="name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.description.error}
          helperText={
            formError.description.error && formError.description.message
          }
          id="outlined-basic"
          label="Descripcion"
          name="description"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.state.error}
          helperText={formError.state.error && formError.state.message}
          id="outlined-basic"
          label="Estado"
          name="state"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.suburb.error}
          helperText={formError.suburb.error && formError.suburb.message}
          id="outlined-basic"
          label="Colonia"
          name="suburb"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.street.error}
          helperText={formError.street.error && formError.street.message}
          id="outlined-basic"
          label="Calle"
          name="street"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.number.error}
          helperText={formError.number.error && formError.number.message}
          id="outlined-basic"
          label="Numero"
          name="number"
          variant="outlined"
          onChange={handleChange}
        />
        <ButtonFormSecurePlace
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading ? "Enviando los datos..." : "Enviar datos"}
        </ButtonFormSecurePlace>
      </FormFormSecurePlace>
    </DivFormSecurePlace>
  );
}
