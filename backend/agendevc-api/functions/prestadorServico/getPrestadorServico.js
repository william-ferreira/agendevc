'use strict'
const AWS = require('aws-sdk')

module.exports.getPrestadorServico = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE
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
      items: await result.Items.map(customer => {
        return {
          id: customer.primary_key,
          nomeNegocio: customer.nomeNegocio,
          numeroWhatsappNegocio: customer.numeroWhatsappNegocio,
          descricaoNegocio: customer.descricaoNegocio,
          horariosFuncionamento: customer.horariosFuncionamento,
          formasPagamento: customer.formasPagamento,
          agendamentos: customer.agendamentos,
          clientes: customer.clientes,
          servicos: customer.servicos
          }
        })
    })
  }

}