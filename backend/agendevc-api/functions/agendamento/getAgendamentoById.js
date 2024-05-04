'use strict'
const AWS = require('aws-sdk');

module.exports.getAgendamentoById = async (event) => {
  const agendamentoId = event.pathParameters.agendamentoId; // ID do agendamento passado como parâmetro de caminho
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  
  const queryParams = {
    TableName: process.env.DYNAMODB_AGENDEVC_TABLE, // A tabela onde o item está armazenado
    Key: {
      primary_key: '0de76a48-3f9d-471a-a978-16bf024d538f' // A chave primária do negócio
    }
  };

  try {
    const result = await dynamoDb.get(queryParams).promise();
    const agendamentos = result.Item.agendamentos;

    // Filtrar manualmente para encontrar o agendamento pelo ID
    const agendamento = agendamentos.find(ag => ag.AgendamentoId === agendamentoId);

    if (agendamento) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Agendamento encontrado', agendamento: agendamento })
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Agendamento não encontrado' })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro ao buscar agendamento', error: error.message })
    };
  }
}
