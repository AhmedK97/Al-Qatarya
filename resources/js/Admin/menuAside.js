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
} from "@mdi/js";

export default [
    {
        route: "dashboard",
        icon: mdiMonitor,
        label: "Dashboard",
    },
    {
        route: "index.employees",
        label: "Employees",
        icon: mdiAccountMultipleOutline,
    },
    // {
    //     route: "dashboard",
    //     label: "Employers",
    //     icon: mdiAccountGroup,
    // },
    // {
    //     route: "/forms",
    //     label: "Forms",
    //     icon: mdiSquareEditOutline,
    // },
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
    {
        href: "https://github.com/justboil/admin-one-vue-tailwind",
        label: "GitHub",
        icon: mdiGithub,
        target: "_blank",
    },
    {
        href: "https://github.com/justboil/admin-one-react-tailwind",
        label: "React version",
        icon: mdiReact,
        target: "_blank",
    },
];
