import { S3 } from 'aws-sdk';


const s3 = new S3({
    accessKeyId: process.env.ACCESS_KEY_ID ?? "cg16553",
    secretAccessKey: process.env.SECRET_ACCESS_KEY ?? "_qxibxfrhvti38urusxu_pbbuprmqwc_",
    endpoint: process.env.ENDPOINT ?? "https://s3.timeweb.com",
    s3ForcePathStyle: true,
    region: 'ru-1',
    apiVersion: 'latest',
})

export default s3