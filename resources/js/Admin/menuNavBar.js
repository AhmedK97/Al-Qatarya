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
                icon: mdiAccount,
                label: "الملف الشخصي",
                to: "/profile",
            },
            {
                icon: mdiCogOutline,
                label: "الاعدادات",
            },
            {
                icon: mdiEmail,
                label: "الرسائل",
            },
            {
                isDivider: true,
            },
            {
                icon: mdiLogout,
                label: "تسجيل الخروج",
                isLogout: true,
            },
        ],
    },
    {
        icon: mdiThemeLightDark,
        label: "Light/Dark",
        isDesktopNoLabel: true,
        isToggleLightDark: true,
    },

    {
        icon: mdiLogout,
        label: "تسجيل الخروج",
        isDesktopNoLabel: true,
        isLogout: true,
    },
];
