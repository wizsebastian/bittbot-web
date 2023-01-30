import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useForm } from 'react-final-form';

const SubscribeForm = () => {
  const { handleSubmit, submitting, form, pristine, values } = useForm({
    onSubmit: (values) => {
      console.log(`Email: ${values.email}`);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'El campo de correo es obligatorio';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'El correo es inválido';
      }
      return errors;
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Correo electrónico</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Suscribete ya"
        />
      </FormGroup>
      <Button type="submit" disabled={submitting || pristine}>
        Enviar
      </Button>
    </Form>
  );
};

export default SubscribeForm;