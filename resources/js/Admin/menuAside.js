import {
    mdiAccountCircle,
    mdiMonitor,
    mdiGithub,
    mdiLock,
    mdiAlertCircle,
    mdiSquareEditOutline,
    mdiTable,
    mdiViewList,
    mdiTelevisionGuide,
    mdiResponsive,
    mdiPalette,
    mdiReact,
    mdiAccountMultipleOutline,
    mdiAccountGroup,
    mdiCashMultiple,
} from "@mdi/js";

export default [
    {
        route: "dashboard",
        icon: mdiMonitor,
        label: "لوحه التحكم",
    },
    {
        route: "index.employees",
        label: "الموظفين",
        icon: mdiAccountMultipleOutline,
    },
    {
        route: "index.customers",
        label: "العمــلاء",
        icon: mdiAccountGroup,
    },
    {
        route: "index.services",
        label: "الخدمــات",
        icon: mdiSquareEditOutline,
    },
    {
        route: "index.projects",
        label: "المشــاريع",
        icon: mdiSquareEditOutline,
    },
    {
        route: "index.transactions",
        label: "المعــاملات المالية",
        icon: mdiCashMultiple,
    },

    {
        // Inventory
        label: "Inventory",
        icon: mdiTable,
        route: "index.inventory",
    },

    // {
    //     route: "/ui",
    //     label: "UI",
    //     icon: mdiTelevisionGuide,
    // },
    // {
    //     route: "/responsive",
    //     label: "Responsive",
    //     icon: mdiResponsive,
    // },
    // {
    //     route: "/",
    //     label: "Styles",
    //     icon: mdiPalette,
    // },
    // {
    //     route: "/profile",
    //     label: "Profile",
    //     icon: mdiAccountCircle,
    // },
    // {
    //     route: "/login",
    //     label: "Login",
    //     icon: mdiLock,
    // },
    // {
    //     route: "/error",
    //     label: "Error",
    //     icon: mdiAlertCircle,
    // },
    {
        label: "Dropdown",
        icon: mdiViewList,
        menu: [
            {
                label: "Item One",
            },
            {
                label: "Item Two",
            },
        ],
    },
];
