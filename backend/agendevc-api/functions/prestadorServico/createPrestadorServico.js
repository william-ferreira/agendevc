'use strict'
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');

module.exports.createPrestadorServico = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString())
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const putParams = {
    TableName: process.env.DYNAMODB_AGENDEVC_TABLE,
    Item: {
      primary_key: uuidv4(), 
      nomeNegocio: body.nomeNegocio,
      numeroWhatsappNegocio: body.numeroWhatsappNegocio,
      descricaoNegocio: body.descricaoNegocio,
      horariosFuncionamento: body.horariosFuncionamento,
      formasPagamento: body.formasPagamento,
      agendamentos: body.agendamentos,
      clientes: body.clientes,
      servicos: body.servicos
    }
  }
  await dynamoDb.put(putParams).promise()

  return {
    statusCode: 201
  }
}