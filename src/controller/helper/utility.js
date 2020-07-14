
// import { IResponseFormat } from "../interfaces/ResponseFormat";

module.exports = {

    generateResponse: function (statusCode, message, isSuccess, data) {
        let _responseFormat;
        return _responseFormat = {
            statusCode,
            message,
            isSuccess,
            data
        }
    }

}