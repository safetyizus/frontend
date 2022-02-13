import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import FormSection from "components/forms/FormSection";
import TextInput from "components/forms/TextInput";
import Button from "components/elements/Button";
import styled from "styled-components";
import { type } from "components/styles/mixins";
import { spacers } from "components/styles/primitives";
import FormRow from "components/forms/FormRow";

const Label = styled.label`
    ${type.em};

    display: flex;
    align-items: center;

    & > *:first-child {
        margin-right: ${spacers.spacing(1)};
    }
`;

const AccountSchema = Yup.object().shape({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
    enquiry_from: Yup.string().required(),
});

const ContactForm = () => {
    const initialValues = {
        name: null,
        phone: null,
        email: null,
        enquiry_from: null,
    };

    const handleSubmit = async (values) => {
        alert(Object.values(values));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={AccountSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            <Form>
                <FormSection heading="Your Details">
                    <FormRow>
                        <TextInput name="name" label="Full Name" />
                        <TextInput name="phone" label="Phone Number" />
                        <TextInput name="email" label="Email Address" />
                    </FormRow>
                </FormSection>
                <FormSection heading="I am a">
                    <FormRow>
                        <Label>
                            <Field
                                type="radio"
                                name="enquiry_from"
                                value="real_estate_agent"
                            />
                            Real Estate Agent
                        </Label>
                        <Label>
                            <Field
                                type="radio"
                                name="enquiry_from"
                                value="private_landlord"
                            />
                            Private Landlord
                        </Label>
                    </FormRow>
                </FormSection>
                <FormSection>
                    <div>
                        <Button type="submit">Get in touch</Button>
                    </div>
                </FormSection>
            </Form>
        </Formik>
    );
};

export default ContactForm;
