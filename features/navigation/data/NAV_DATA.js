import Account from "icons/Account";
import Invoice from "icons/Invoice";
import Properties from "icons/Properties";
import Tickets from "icons/Tickets";
import New from "icons/New";
import Logout from "icons/Logout";

const NAV_LINKS = [
    {
        label: "Tickets",
        links: [
            {
                text: "See Tickets",
                url: "/tickets",
                icon: Tickets,
            },
            {
                text: "Create Ticket",
                url: "/tickets/create",
                icon: New,
            },
        ],
    },
    {
        label: "Properties",
        links: [
            {
                text: "See Properties",
                url: "/properties",
                icon: Properties,
            },
            {
                text: "Create Property",
                url: "/properties/create",
                icon: New,
            },
        ],
    },
    {
        label: "Invoices",
        links: [
            {
                text: "See Invoices",
                url: "/invoices",
                icon: Invoice,
            },
            {
                text: "Create Invoice",
                url: "/invoices/create",
                icon: New,
            },
        ],
    },
    {
        label: "Profile",
        links: [
            {
                text: "My Profile",
                url: "/profile",
                icon: Account,
            },
            {
                text: "Log Out",
                url: "/api/auth/logout",
                icon: Logout,
            },
        ],
    },
];

export default NAV_LINKS;
