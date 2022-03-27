

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = async (event) => {
    console.log(event)
    const clientId = event.pathParameters.clientId;
    const client = {'clientId': clientId, 'clientName': "Client " + clientId };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(client),
    };
    return response;
};
