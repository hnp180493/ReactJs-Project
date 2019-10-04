class userInfoService{
    static addUser = (userInfo) =>{
        localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    }

    static removeUser = () =>{
        localStorage.removeItem('USER_INFO');
    }

    static getUserInfo = () =>{
        return JSON.parse(localStorage.getItem('USER_INFO'));
    }
}

export default userInfoService;