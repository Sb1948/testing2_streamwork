# Add localhost self-signed certificate

Since the remove servers are running with ssl enabled, you need to run your client with https and a self-signed certificate.
This certificate is included in this repo in the `cert` folder.

## Install the certificate in Google Chrome

settings -> Privacy and Security -> Security -> Manage Certificates

Go to the `Authorities` tab and click the `Import` button

add `.cert/StreamWorkCA.pem`

the dev server CORS policy expects the origin to be https://localhost:3000

https://localhost:3000 not http://localhost:3000

# Run in dev mode

```
npm run dev
```

# Server endpoints:

## Dev server
This should be used for frontend development since it's a separate server and database from staging/production and there's no issue with data integrity
It's set in `.env.development` file and is the default endpoint when running `npm run dev`
https://admin-dev.streamwork.io/


### Staging/Prod server

https://admin.streamwork.io/