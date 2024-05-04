'use strict'
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');

module.exports.createAgendamento = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const updateParams = {
    TableName: process.env.DYNAMODB_AGENDEVC_TABLE, // A tabela onde o item está armazenado
    Key: {
      primary_key: '0de76a48-3f9d-471a-a978-16bf024d538f' // A chave primária do negócio
    },
    UpdateExpression: 'SET agendamentos = list_append(agendamentos, :agendamento)',
    ExpressionAttributeValues: {
      ':agendamento': [{
        AgendamentoId: uuidv4(), // Um novo UUID para cada agendamento
        clienteNome: body.clienteNome,
        clienteWhatsapp: body.clienteWhatsapp,
        data: body.data,
        horario: body.horario,
        servicoNome: body.servicoNome,
        servicoValor: body.servicoValor,
        servicoDuracao: body.servicoDuracao,
        formaPagamento: body.formaPagamento
      }],
      ':data': body.data,
      ':horario': body.horario
    },
    ConditionExpression: 'NOT contains(agendamentos, :data) AND NOT contains(agendamentos, :horario)',
    ReturnValues: 'UPDATED_NEW' // Retorna o novo estado do atributo 'agendamentos'
  };

  try {
    const result = await dynamoDb.update(updateParams).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Agendamento adicionado com sucesso', result: result })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Falha ao adicionar agendamento ou agendamento já existe para a mesma data e horário', error: error.message })
    };
  }
}
