module.exports = (status, body) => {
  return {
    statusCode: status,
    body: JSON.stringify(body)
  }
}