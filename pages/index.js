import PageHero from "sections/PageHero";
import PageContent from "sections/PageContent";
import PageCards from "sections/PageCards";
import PageContact from "sections/PageContact";
import PageFooter from "sections/PageFooter";

import SmokeAlarm from "icons/SmokeAlarm";
import Electrical from "icons/Electrical";
import Gas from "icons/Gas";
import Exit from "icons/Exit";

const Page = () => {
    return (
        <>
            <PageHero
                header="SafetyIzUs"
                subheader="Smoke Detectors ⋅ Electrical ⋅ Gas ⋅ Emergency Exits"
            />
            <PageContent
                note="As per legislation changes to Residential Tenancies Act effective at 29th March 2021 Safety Iz Us offers complete solution for Landlords & Property Managers to ensure gas & electrical compliance."
                content={[
                    "Landlords are obligated to ensure that all electrical & gas appliances provided at their property are tested bi-annually.",
                    "Mandatory electrical and gas safety checks will be required every 2 years by licensed gas plumbers & electricians and provision of report.",
                    "Document will include all specifications, readings and observations at the property ensuring compliance and works required to address any issues.",
                    "All smoke alarm batteries to be changed every 12 months. Our system will notify Landlords and Property Managers of schedule for these works.",
                ]}
            />
            <PageCards
                cards={[
                    {
                        icon: SmokeAlarm,
                        color: "rgb(220, 53, 69)",
                        title: "Smoke Alarm",
                        price: "85",
                        blurb: "Smoke alarm test & battery change",
                        period: "Required Every Year",
                    },
                    {
                        icon: Electrical,
                        color: "rgb(255, 193, 7)",
                        title: "Electrical",
                        price: "280",
                        blurb: "Switchboard Compliance, Safety Switch Testing & Electrical Appliance Testing",
                        period: "Required Every Two Years",
                    },
                    {
                        icon: Gas,
                        color: "rgb(13, 202, 240)",
                        title: "Gas",
                        price: "280",
                        blurb: "Carbon Monoxide Testing",
                        period: "Required Every Two Years",
                    },
                    {
                        icon: Exit,
                        color: "rgb(25, 135, 84)",
                        title: "Paths of Egress",
                        blurb: "Quote on Request",
                        period: "As Required",
                    },
                ]}
            />
            <PageContact />
            <PageFooter />
        </>
    );
};

const getProps = async (context) => {
    return {
        props: {},
    };
};

export default Page;
