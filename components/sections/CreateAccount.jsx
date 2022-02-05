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
    };

    return (
        <Formik initialValues={initialValues}>
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
