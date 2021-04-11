export const Error = (status, message, errorData) => {

    let error = {
        status: status,
        message: message,
        error: errorData
    }

    return error;

}