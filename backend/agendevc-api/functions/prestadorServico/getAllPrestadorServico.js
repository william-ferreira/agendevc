'use strict'
const AWS = require('aws-sdk')

module.exports.getAllPrestadorServico = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_AGENDEVC_TABLE
  }

  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const result = await dynamodb.scan(scanParams).promise()

  if (result.Count === 0) {
    return {
      statusCode: 404
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: await result.Items.map(prestador => {
        return {
          id: prestador.primary_key,
          nomeNegocio: prestador.nomeNegocio,
          numeroWhatsappNegocio: prestador.numeroWhatsappNegocio,
          descricaoNegocio: prestador.descricaoNegocio,
          horariosFuncionamento: prestador.horariosFuncionamento,
          formasPagamento: prestador.formasPagamento,
          agendamentos: prestador.agendamentos,
          clientes: prestador.clientes,
          servicos: prestador.servicos
          }
        })
    })
  }

}