const initialProps = {
    stateModalAddTweet: false
};
export default function (state = initialProps, action) {
    switch (action.type) {

        //siempre debe ir en mayuscula y minimo dos palabras para diferenciar
        case "STATE_ADD_TWEET_MODAL":
            return {
                ...state,
                stateModalAddTweet: action.payload
            };
        default:
            return state;
    }

}