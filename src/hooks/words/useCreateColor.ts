import {colors} from '@/data/colors'

export default function useCreateColor() {
    
    const createColor = (num:number)=> {
        return colors[num]
    }
  
    return {createColor}
}
