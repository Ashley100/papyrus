export const withAuthController = function (req, res) {

    // Here will be auth logic

    return function (fn) {
        fn(req, res);
    }

}