import {
    mdiMenu,
    mdiClockOutline,
    mdiCloud,
    mdiCrop,
    mdiAccount,
    mdiCogOutline,
    mdiEmail,
    mdiLogout,
    mdiThemeLightDark,
    mdiGithub,
    mdiReact,
} from "@mdi/js";

export default [
    {
        isCurrentUser: true,
        menu: [
            {
                icon: mdiCogOutline,
                label: "الاعدادات",
                to: "/user/profile",
                route: "profile.show",
            },
        ],
    },
];
