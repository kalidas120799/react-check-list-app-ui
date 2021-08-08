import { Home, RestoreFromTrash, ExitToApp } from '@material-ui/icons';

export const sidemenu = [
    {
        name: "Home",
        path: "/home",
        icon: <Home />
    },
    {
        name: "Recycle",
        path: "/recycle",
        icon: <RestoreFromTrash />
    },
    {
        name: "Logout",
        path: "/logout",
        icon: <ExitToApp />
    },
]