import _ from 'lodash';

const formatGraphQLError = error => {
    const errorDetaisl = _.get(error, "originalError,response.body");
    try {
        if (errorDetails) return JSON.parse(errorDetails);
    } catch(e) {}

    return error;
}

export default formatGraphQLError;