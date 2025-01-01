import { axiosWithAuth } from '@/api/interceptors'
import { setSettings } from '@/redux/slices/modalSlice';
import { selectUser, setUser } from '@/redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import useInitialError from '../error/useInitialError';

export default function useLaterality() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const {initialError} = useInitialError();

  const laterality = async()=> {
    try {
      const profile = {
        ...user,
        laterality: user.laterality === 'right' ? 'left' : 'right',
      }
      const res = await axiosWithAuth.put('/user/profile', profile)
      dispatch(setUser(res.data));
      dispatch(setSettings(false));
      initialError(true, 'латеральность успешно изменена', 'success', 1500);
    } catch (error) {
      initialError(true, 'Ошибка изменения латеральности', 'error');
    }
  }

  return {laterality}
}
