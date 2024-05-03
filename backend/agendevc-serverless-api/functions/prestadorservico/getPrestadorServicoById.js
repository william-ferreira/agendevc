'use strict';

const { getSuccessResponse } = require('../../utils/requestSucess');
const { getErrorResponse } = require('../../utils/requestError');

const { PrestadorServico } = require('../../models/PrestadorServico');

module.exports.main = async (event) => {
    try {
      const queryStringParameters = event.queryStringParameters;
      const { id } = queryStringParameters;
  
      const result = await PrestadorServico.get({ id });
      return getSuccessResponse(result);
    } catch (error) {
      return getErrorResponse(error);
    }
  };