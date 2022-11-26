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