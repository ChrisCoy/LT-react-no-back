import React from "react";

interface Props {
  message: string;
}

const CustomStaticComponent: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>
        Esse componente funciona como um template estatico, removendo a necessidade de templates-engines como EJS, Pug, Handlebars, etc.
      </p>
    </div>
  );
};

export { CustomStaticComponent };
