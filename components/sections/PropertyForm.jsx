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
import { nanoid } from "nanoid";
import LightswitchInput from "components/forms/LightswitchInput";
import CheckboxInput from "components/forms/CheckboxInput";

const PropertySchema = Yup.object().shape({
    id: Yup.string().required(),
    // Tenant Details
    tenant_first_name: Yup.string().required(),
    tenant_last_name: Yup.string().required(),
    tenant_phone: Yup.string().required(),
    // Address Details
    address: Yup.string().required(),
    unit: Yup.string().required(),
    postcode: Yup.string().required(),
    suburb: Yup.string().required(),
    state: Yup.string().required(),
    // Property Details
    has_smoke_detectors: Yup.boolean().required(),
    has_electrical: Yup.boolean().required(),
    has_gas: Yup.boolean().required(),
    has_seperately_metered_gas: Yup.boolean(),
    // Acknowledge Details
    confirm_correct_info: Yup.boolean().isTrue().required(),
    confirm_tenant_notified: Yup.boolean().isTrue().required(),
    confirm_additional_costs: Yup.boolean().isTrue().required(),
});

const PropertyForm = ({ id }) => {
    const router = useRouter();
    const [properties, setProperties] = useLocalStorage("siu_properties", {});

    const initialValues = {
        id: nanoid(),
        // Tenant Details
        tenant_first_name: null,
        tenant_last_name: null,
        tenant_phone: null,
        // Address Details
        address: null,
        unit: null,
        postcode: null,
        suburb: null,
        state: null,
        // Property Details
        has_smoke_detectors: false,
        has_electrical: false,
        has_gas: false,
        has_seperately_metered_gas: false,
        // Acknowledge Details
        confirm_correct_info: false,
        confirm_tenant_notified: false,
        confirm_additional_costs: false,
        ...(properties[id] ?? {}),
    };

    console.log(initialValues);

    const handleSubmit = async (values) => {
        setProperties({
            ...properties,
            [values.id]: {
                ...values,
            },
        });

        router.push("/properties");
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={PropertySchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            <Form>
                <FormSection heading="Address Details">
                    <AddressInput name="address" />
                </FormSection>
                <FormSection heading="Tenant Details">
                    <FormRow>
                        <TextInput
                            name="tenant_first_name"
                            label="First Name"
                        />
                        <TextInput name="tenant_last_name" label="Last Name" />
                    </FormRow>
                    <TextInput name="tenant_phone" label="Phone Number" />
                </FormSection>
                <FormSection heading="Property Details">
                    <FormRow>
                        <LightswitchInput
                            name="has_smoke_detectors"
                            label="Does this property have smoke detectors?"
                        />
                        <LightswitchInput
                            name="has_electrical"
                            label="Is this property connected to electricity?"
                        />
                        <LightswitchInput
                            name="has_gas"
                            label="Is this property connected to gas?"
                        />
                        <LightswitchInput
                            name="has_seperately_metered_gas"
                            label="Is your gas seperately metered?"
                        />
                    </FormRow>
                </FormSection>
                <FormSection heading="Confirm Details">
                    <CheckboxInput
                        name="confirm_correct_info"
                        label="I confirm that I have provided all details provided as accurately as possible."
                    />
                    <CheckboxInput
                        name="confirm_tenant_notified"
                        label="I confirm that I have notified that the tenant has been notified that their product will be listed with SafetyIzUs. I also understand that the tenant will be contacted using these details."
                    />
                    <CheckboxInput
                        name="confirm_additional_costs"
                        label="I understand that if a tenant is unavailable to allow a service worker in, additional costs may be incurred"
                    />
                </FormSection>
                <FormSection>
                    <div>
                        <Button type="submit">
                            {properties[id]
                                ? "Save Details"
                                : "Create Property"}
                        </Button>
                    </div>
                </FormSection>
            </Form>
        </Formik>
    );
};

export default PropertyForm;
