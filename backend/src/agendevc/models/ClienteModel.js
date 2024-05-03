const dynamoose = require('../config/dynamoConfig');

const clienteSchema = new dynamoose.Schema({
    ClienteId: {
      type: String,
      hashKey: true
    },
    NomeCliente: String,
    WhatsappCliente: String,
    AgendamentosCliente: {
      type: Array,
      schema: [String]
    }
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('ClienteModel', clienteSchema);