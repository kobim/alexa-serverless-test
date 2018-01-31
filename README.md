# alexa-app with Serverless

Examples of using [alexa-app](https://github.com/alexa-js/alexa-app) with [Serverless Framework](https://serverless.com/)

## Usage

For each cloud provider (_aws-lambda_, _google-funcs_...), perform the following:
```
cd provider
yarn
serverless deploy
```

## Provider-specific instructions

### Google Cloud

* Define your alexa skill's service endpoint as "HTTPS" with the function endpoint (can be retrived using `serverless info`)
* "SSL Certificate" configuration should be _My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority_