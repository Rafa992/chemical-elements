import { setUser } from '@/redux/slices/userSlice';
import { setCurrentRange } from '@/redux/slices/wordsSlice';
import { useAppDispatch } from '@/redux/store';
import { getProfile } from '@/services/getProfile.service';
import useInitialError from '../error/useInitialError';
import useGetAllWords from '../words/useGetAllWords';

export default function useProfile() {

    const dispatch = useAppDispatch();
    const {getAllWords} = useGetAllWords();
    const {initialError} = useInitialError();

    const fetchProfile = async () => {
        try {
            const profile = await getProfile();
            if (profile) {
              dispatch(setUser(profile));
              dispatch(setCurrentRange(profile.currentRange));
              getAllWords();
              initialError(true, 'Профиль успешно загружен', 'success');
            }
        } catch (error) {
            initialError(true, 'Ошибка профиля', 'error');
        }
    };


  return {fetchProfile}
}
