interface Response {
    code: number,
    status: boolean,
    results: any,
    message: string,
}

const formatResponse = <Response>(code, status, results, message) => {
    return {
        code: code,
        status: status,
        results: results,
        message: message || ""
    }
}

export default formatResponse;