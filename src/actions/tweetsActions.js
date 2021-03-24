export const addTweetAction = state => {
    return {
        //se escribe la accion que se quiere ejecutar
        type: "ADD_TWEET",
        payload: state
    };
};

export const deleteTweetAction = id => {

    return {
        type: "DELETE_TWEET",
        payload: id
    };
};