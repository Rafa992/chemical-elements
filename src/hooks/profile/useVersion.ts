import { axiosWithAuth } from '@/api/interceptors'
import { selectUser, setUser } from '@/redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import useInitialError from '../error/useInitialError';

export default function useVersion() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const {initialError} = useInitialError();

  const version = async()=> {
    try {
      const profile = {
        ...user,
        version: user.version === 'en-ru' ? 'ru-en' : 'en-ru',
      }
      const res = await axiosWithAuth.put('/user/profile', profile)
      dispatch(setUser(res.data))
      initialError(true, 'версия успешно изменена', 'success');
    } catch (error) {
      initialError(true, 'ошибка изменения версии', 'error');
    }
  }

  return {version}
}
