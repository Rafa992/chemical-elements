import { axiosWithAuth } from '@/api/interceptors'
import { selectUser, setUser } from '@/redux/slices/userSlice'
import { setCurrentRange } from '@/redux/slices/wordsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store'
import useInitialError from '../error/useInitialError';

export default function useCurrentRange() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const {initialError} = useInitialError();

  const changeCurrentRange = async(range: string)=> {
    dispatch(setCurrentRange(range))
    try {
      const profile = {
        ...user,
        currentRange: range,
      }
      const res = await axiosWithAuth.put('/user/profile', profile)
      initialError(true, 'диапазон успешно изменен', 'success');
    } catch (error) {
      initialError(true, 'Ошибка изменения диапазона', 'error');
      throw new Error('error while to change current range')
    }
  }

  return {changeCurrentRange}
}
