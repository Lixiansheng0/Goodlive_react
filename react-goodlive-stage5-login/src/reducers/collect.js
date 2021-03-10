import { COLLECTED, UNCOLLECTED } from "../constants"

const initState = [];

export default function collect(state = initState, action) {
    switch (action.type) {
        case COLLECTED:
            return [
                ...state,
                action.data
            ]
        case UNCOLLECTED:
            return state.filter(function (item) {
                if (item.id != action.data.id) {
                    return item;
                }
            })
        default:
            return state;
    }
}