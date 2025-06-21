export const handler = async (event) => {
  const query = event.queryStringParameters || {};
  const a = parseFloat(query.a);
  const b = parseFloat(query.b);
  const op = query.op;
 
  if (isNaN(a) || isNaN(b) || !op) {
      return {
          statusCode: 400,
          body: JSON.stringify({ error: "Invalid input. Provide a, b, and op (add, subtract, multiply, divide)." })
      };
  }

  let result;
  switch (op) {
      case 'add':
          result = a + b;
          break;
      case 'subtract':
          result = a - b;
          break;
      case 'multiply':
          result = a * b;
          break;
      case 'divide':
          if (b === 0) {
              return {
                  statusCode: 400,
                  body: JSON.stringify({ error: "Division by zero." })
              };
          }
          result = a / b;
          break;
      default:
          return {
              statusCode: 400,
              body: JSON.stringify({ error: "Unsupported operation. Use add, subtract, multiply, divide." })
          };
  }

  return {
      statusCode: 200,
      body: JSON.stringify({ result })
  };
};
