import React from "react";
import { useState, useEffect, useReducer } from "react";
import { Icon } from '@iconify/react';
import "./ContactView.css";

const initialState = {
    fullName: "",
    email: "",
    message: "",
  };

  function formReducer(state, action) {
    return { ...state, [action.name]: action.value };
  }

export default function Product() {
    const [formData, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "fullName" && value !== "" && !/^[a-zA-Z\s]+$/.test(value)) return;
        dispatch({ name, value: type === "checkbox" ? checked : value });
        setErrors({ ...errors, [name]: "" });
      };

  useEffect(() => {

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!/^[a-zA-Z]+\s+[a-zA-Z]+$/.test(formData.fullName)) {
      newErrors.fullName = "Debe ingresar al menos dos palabras, no se admiten simbolos ni números.";
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo válido.";
    }

    //formData Contains data from form

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Datos enviados correctamente. Le contactaremos en breve.");
    }
  };

  return (
    <div className="main-div">
      <div className="main-left">
        <h1>Contáctanos</h1>
        <p className="description">Si tienes alguna duda o sugerencia, puedes contactar con nosotros a traves de los siguientes medios o rellenando el formulario de contacto:</p>
        <div className="contact-data">
        <p><Icon icon="teenyicons:phone-outline" /> 999999999</p>
        <p><Icon icon="teenyicons:envelope-outline" /> kidtopia.contact@gmail.com</p>
        <p><Icon icon="teenyicons:pin-outline" /> ciudad, CCAA, Pais</p>
        </div>
      </div>
      <div className="main-right">
      <form onSubmit={handleSubmit} className="contact-form">
            <div className="formdiv-field">
              <label className="form-labels"></label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                maxLength={50}
                placeholder="Nombre y Apellidos"
                required
              />
              {errors.fullName && <p className="error-text">{errors.fullName}</p>}
            </div>
            <div className="formdiv-field">
              <label className="form-labels"></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                maxLength={30}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="formdiv-field">
              <label className="form-labels"></label>
              <textarea
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escriba aquí su mensaje... (Máximo 500 caracteres)"
                maxLength={500}
                required
              />
            </div>
            <button type="submit" className="form-button">Enviar</button>
            </form>
      </div>
    </div>
  );
};