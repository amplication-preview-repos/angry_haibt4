import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const SalonShopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <div />
        <TextInput label="name" source="name" />
        <NumberInput label="ratings" source="ratings" />
        <BooleanInput label="viewButton" source="viewButton" />
      </SimpleForm>
    </Edit>
  );
};
