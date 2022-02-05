import React from "react";
import { Form, Formik } from "formik";

import FormRow from "components/forms/FormRow";
import FormSection from "components/forms/FormSection";
import AccountTypeInput from "components/forms/AccountTypeInput";
import TextInput from "components/forms/TextInput";
import AddressInput from "components/forms/AddressInput";
import Button from "components/elements/Button";

const CreateAccount = () => {
    const initialValues = {
        type: null,
        first_name: null,
        last_name: null,
        phone: null,
        company: null,
        address: null,
        postcode: null,
        state: null,
    };

    const handleSubmit = async (values) => {
        const url = "https://siu-api-dev.herokuapp.com/v1/users/update";

        const data = {
            user: {
                email: "",
                type: values.type,
                name: values.first_name,
                surname: values.last_name,
                role: "",
                company: values.company,
                address: values.address,
                postal_code: values.postcode,
                state: values.state,
                mobile_number: values.phone,
                ownership_entity: "",
            },
        };

        alert(JSON.stringify(data));
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <FormSection heading="What type of account are you making?">
                    <AccountTypeInput name="type" />
                </FormSection>
                <FormSection heading="Personal Details">
                    <FormRow>
                        <TextInput name="first_name" label="First Name" />
                        <TextInput name="last_name" label="Last Name" />
                    </FormRow>
                    <TextInput name="phone" label="Phone Number" />
                    <TextInput name="company" label="Company" />
                </FormSection>
                <FormSection heading="Address">
                    <AddressInput name="address" />
                </FormSection>
                <FormSection>
                    <div>
                        <Button type="submit">Create your Account</Button>
                    </div>
                </FormSection>
            </Form>
        </Formik>
    );
};

export default CreateAccount;
