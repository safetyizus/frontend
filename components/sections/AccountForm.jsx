import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormRow from "components/forms/FormRow";
import FormSection from "components/forms/FormSection";
import AccountTypeInput from "components/forms/AccountTypeInput";
import TextInput from "components/forms/TextInput";
import AddressInput from "components/forms/AddressInput";
import Button from "components/elements/Button";
import useLocalStorage from "hooks/useLocalStorage";

const AccountSchema = Yup.object().shape({
    is_complete: Yup.boolean(),
    type: Yup.string().oneOf(["owner", "agent"]),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    phone: Yup.string().required(),
    company: Yup.string().required(),
    address: Yup.string().required(),
    postcode: Yup.string().required(),
    state: Yup.string().required(),
});

const AccountForm = () => {
    const router = useRouter();
    const [user, setUser] = useLocalStorage("siu_user");

    const initialValues = {
        type: null,
        first_name: null,
        last_name: null,
        phone: null,
        company: null,
        address: null,
        postcode: null,
        state: null,
        ...user,
    };

    const handleSubmit = async (values) => {
        setUser({
            ...user,
            ...values,
            is_complete: true,
        });

        router.push("/account");
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
                {!user?.is_complete && (
                    <FormSection heading="What type of account are you making?">
                        <AccountTypeInput name="type" />
                    </FormSection>
                )}

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

export default AccountForm;
