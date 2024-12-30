import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useAppSelector } from '@/redux/store';
import { selectUser } from '@/redux/slices/userSlice';
import s from './Version.module.scss'
import useVersion from '@/hooks/profile/useVersion';

export default function Version() {

  const user = useAppSelector(selectUser)
  const {version} = useVersion();

  const handleChange = () => {
    version();
  };

  return (
    <FormControl  className={s.version}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={user?.version  || 'en-ru'}
        onChange={handleChange}
      >
        <FormControlLabel value="ru-en" control={<Radio />} label="Symbol-Info" />
        <FormControlLabel value="en-ru" control={<Radio />} label="Info-Symbol" />
      </RadioGroup>
    </FormControl>
  );
}
