import json

def brotliRequest(event, context):
  request = event['Records'][0]['cf']['request']
  if (request['uri'].endswith('.js')): request['uri'] += '.br'
  return request
