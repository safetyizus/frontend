import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import useProfile from "hooks/useProfile";

import FormRow from "forms/FormRow";
import FormSection from "forms/FormSection";
import AccountTypeInput from "forms/AccountTypeInput";
import TextInput from "forms/TextInput";
import AddressInput from "forms/AddressInput";

import Button from "elements/Button";
import { updateProfile } from "helpers/profile";
import LoadingState from "./LoadingState";

const AccountSchema = Yup.object().shape({
    is_complete: Yup.boolean(),
    role: Yup.string().oneOf(["owner", "agent"]),
    name: Yup.string().required(),
    surname: Yup.string().required(),
    mobile_number: Yup.string().required(),
    company: Yup.string().required(),
    address: Yup.string().required(),
    postal_code: Yup.string().required(),
    state: Yup.string().required(),
});

const AccountForm = () => {
    const router = useRouter();
    const { user, profile, loading } = useProfile();

    const initialValues = {
        role: null,
        name: null,
        surname: null,
        mobile_number: null,
        company: null,
        address: null,
        postal_code: null,
        state: null,
        ...profile,
    };

    const handleSubmit = async (values) => {
        const data = {
            ...profile,
            ...values,
            email: user.email,
            user_id: user.sub,
            is_complete: true,
        };

        console.log(values);

        await updateProfile(data);

        router.push("/account");
    };

    if (loading) {
        return <LoadingState text="Loading account details..." />;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={AccountSchema}
            validateOnBlur={false}
            validateOnChange={false}
        >
            <Form>
                {!profile?.is_complete && (
                    <FormSection heading="What type of account are you making?">
                        <AccountTypeInput name="role" />
                    </FormSection>
                )}
                <FormSection heading="Personal Details">
                    <FormRow>
                        <TextInput name="name" label="First Name" />
                        <TextInput name="surname" label="Last Name" />
                    </FormRow>
                    <TextInput name="mobile_number" label="Phone Number" />
                    <TextInput name="company" label="Company" />
                </FormSection>
                <FormSection heading="Address">
                    <AddressInput name="address" />
                </FormSection>
                <FormSection>
                    <div>
                        <Button type="submit">
                            {user?.is_complete
                                ? "Save Details"
                                : "Create Account"}
                        </Button>
                    </div>
                </FormSection>
            </Form>
        </Formik>
    );
};

export default AccountForm;
