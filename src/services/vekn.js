import { VEKN_URL } from "../constants/vekn";

export const veknlogin = async (username, password) => {
    username = username ? username : process.env.REACT_APP_VEKN_USERNAME;
    password = password ? password : process.env.REACT_APP_VEKN_PASSWORD;

    const url = `${VEKN_URL}/vekn/login`;

    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': '*/*',
            },
            body: formdata,
            redirect: 'follow',
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log({error});
        throw error;
    }
};

export const getPlayerList = async () => {
    const login = await veknlogin();
    console.log(login);
    return login;
};
