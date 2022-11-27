import { authActions } from "../redux/slices/authSlice";

export const validate = (userName, password, setUserName, setPassword) => {
    let isValid = true;
    if (userName.value.trim() === "") {
        setUserName({
            value: userName.value,
            error: "UserName is required"
        })
        isValid = false;
    }
    if (password.value.trim() === "") {
        setPassword({
            value: password.value,
            error: "Password is required"
        })
        isValid = false;
    }
    else if (password.value.length < 6) {
        setPassword({
            value: password.value,
            error: "Password must be at least 6 characters"
        })
        isValid = false;
    }
    return isValid;
}

export const getAuthConfig = () => {
    const config = {
        headers: {
            Authorization: `Bearer keyfXgn8PL6pB3x32`,
        },
    };
    return config;
}

export const CheckUser = (users_list, userName, password, dispatch) => {
    let isUser = false;
    users_list.forEach((user) => {
        if (user?.fields?.username === userName
            && user?.fields?.password === password) {
            isUser = true;
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authActions.login({
                username: user?.fields?.username,
                password: user?.fields?.password
            }));
            return true;
        }
    });
    return isUser;
}

export const randomNumber = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}