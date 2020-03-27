import _ from 'lodash';

const formatGraphQLError = error => {
    const errorDetails = _.get(error, "originalError.response.body");
    try {
        if (errorDetails) return JSON.parse(errorDetails);
    } catch(e) {
        return next(e)
    }

    return error;
}

export default formatGraphQLError;