import json

def brotliRequest(event, context):
  request = event['Records'][0]['cf']['request']
  if (request['uri'].endsWith('.js')): request['uri'] += '.br'
  return request
