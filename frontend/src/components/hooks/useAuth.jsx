const UseAuth = () => {
    const refresh = localStorage.getItem('refresh_token');
    return !!refresh;
}

export default UseAuth;