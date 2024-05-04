'use strict'
const AWS = require('aws-sdk');

module.exports.deleteAgendamentoById = async (event) => {
  const agendamentoId = event.pathParameters.agendamentoId; // ID do agendamento passado como parâmetro de caminho
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const getParams = {
    TableName: process.env.DYNAMODB_AGENDEVC_TABLE,
    Key: {
      primary_key: '0de76a48-3f9d-471a-a978-16bf024d538f' // A chave primária do negócio
    }
  };

  try {
    // Primeiro, recupera o item atual para encontrar o índice do agendamento a ser removido
    const getResult = await dynamoDb.get(getParams).promise();
    const agendamentos = getResult.Item.agendamentos;
    const agendamentoIndex = agendamentos.findIndex(ag => ag.AgendamentoId === agendamentoId);

    if (agendamentoIndex === -1) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Agendamento não encontrado' })
      };
    }

    // Atualiza o item para remover o agendamento encontrado
    const updateParams = {
      TableName: process.env.DYNAMODB_AGENDEVC_TABLE,
      Key: {
        primary_key: '0de76a48-3f9d-471a-a978-16bf024d538f'
      },
      UpdateExpression: `REMOVE agendamentos[${agendamentoIndex}]`,
      ReturnValues: 'UPDATED_NEW'
    };

    await dynamoDb.update(updateParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Agendamento deletado com sucesso' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro ao deletar agendamento', error: error.message })
    };
  }
}
