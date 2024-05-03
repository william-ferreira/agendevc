'use strict';

const { getSuccessResponse } = require('../../utils/requestSucess');
const { getErrorResponse } = require('../../utils/requestError');

const { v4: uuidv4 } = require('uuid');
const { PrestadorServico } = require('../../models/PrestadorServico');

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const 
        {
            nomeNegocio, 
            whatsappNegocio, 
            descricaoNegocio,
            horariosFuncionamento,
            formasPagamento,
            servicos,
            agendamentos,
            clientes
        } = request;

    const result = await PrestadorServico.create({
      prestadorServicoId: uuidv4(),
      nomeNegocio,
      whatsappNegocio,
      descricaoNegocio,
      horariosFuncionamento,
      formasPagamento,
      servicos,
      agendamentos,
      clientes
    });

    return getSuccessResponse(result);
  } catch (error) {
    console.log(error);
    return getErrorResponse(error);
  }
};