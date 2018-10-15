/**
 * Created by Administrator on 2018/10/15 0015.
 */
export default function title(state = '', action) {
    switch (action.type) {
        case 'SETTITLE' :
            return  action.text
        default:
            return state
    }
}