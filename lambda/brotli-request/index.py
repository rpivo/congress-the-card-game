import json

def brotliRequest(event, context):
  request = event['Records'][0]['cf']['request']
  headers = request['headers']

  if (headers.get('accept-encoding') and 'br' in headers['accept-encoding'][0].value):
    headers['x-compression'] = [{
      'key': 'X-Compression',
      'value': 'br'
    }]

  return request
