interface Response {
    status: number,
    results: any,
    message: string,
}

const formatResponse = <Response>(status, results, message) => {
    return {
        status: status,
        results: results,
        message: message || ""
    }
}

export default formatResponse;