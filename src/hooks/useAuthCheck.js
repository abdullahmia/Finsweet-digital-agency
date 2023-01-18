import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../features/auth/authSlice';

const useAuthCheck = () => {
    const [authCheck, setAuthCheck] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = JSON.parse(localStorage.getItem('token'));
        if (token && user) {
            dispatch(userLoggedIn({
                user: user,
                token: token
            }))
        }

        setAuthCheck(true);
    }, [dispatch])


    return authCheck;
}

export default useAuthCheck;