import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useAppSelector } from '@/redux/store';
import { selectUser } from '@/redux/slices/userSlice';
import useLaterality from '@/hooks/profile/useLaterality';
import s from './Laterality.module.scss'

export default function Laterality() {

  const user = useAppSelector(selectUser)

  const {laterality} = useLaterality();

  const handleChange = () => {
    laterality();
  };

  return (
    <FormControl  className={s.laterality}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={user?.laterality  || 'right'}
        onChange={handleChange}
      >
        <FormControlLabel value="right" control={<Radio />} label="Right" />
        <FormControlLabel value="left" control={<Radio />} label="Left" />
      </RadioGroup>
    </FormControl>
  );
}
