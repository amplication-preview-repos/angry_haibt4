import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const SalonShopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <div />
        <TextInput label="name" source="name" />
        <NumberInput label="ratings" source="ratings" />
        <BooleanInput label="viewButton" source="viewButton" />
      </SimpleForm>
    </Create>
  );
};
