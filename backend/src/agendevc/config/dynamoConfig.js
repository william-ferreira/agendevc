const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  region: 'sa-east-1',
});

if (process.env.NODE_ENV === 'development') {
  dynamoose.aws.ddb.local('http://localhost:8000');
}

module.exports = dynamoose;