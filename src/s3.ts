import { S3 } from "aws-sdk/clients/all";


export default new S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    endpoint: process.env.ENDPOINT,
    s3ForcePathStyle: true,
    region: 'ru-1',
    apiVersion: 'latest',
})