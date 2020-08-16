import json

def brotliRequest(event, context):
  request = event['Records'][0]['cf']['request']
  request['uri'] += '.br'
  return request
