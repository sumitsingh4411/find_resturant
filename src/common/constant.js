export const AIRTABLE_URL = {
    TABLE_DATA: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
}

export const LOGIN_FORM = [
    {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        name: "email",
        value: "",
        error: "",


    },
    {
        label: "Password",
        placeholder: "Enter your password",
        type: "password",
        name: "password",
        value: "",
        error: "",
    }
]

export const INITIAL_STATE = {
    value: "",
    error: ""
}

export const URLPaths = {
    LOGIN: "/",
    DASHBOARD: "/dashboard",
    BOOKMARK: "/bookmark",
}

export const AIRTABLE_RESTURANT_URL = "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants";
export const MAP_DATA = "https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC";

export const CONSTANT_DATA = {
    MAP_DATA: "mapData",
    BOOKMARK: "bookmark",
}