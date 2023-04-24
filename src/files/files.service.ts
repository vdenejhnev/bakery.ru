import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { createReadStream, unlink, unlinkSync, writeFileSync } from "fs";
import path from "path";
import s3 from "src/s3";





const uploadParams = {
    Bucket: process.env.BUCKET,
    Key: null,
    Body: null
}

@Injectable()
export class FilesService {
    constructor(
    ) { }

    async writeImage(image: any) {
       
        const image_name = `${uuidv4().slice(0, 8)}${uuidv4().slice(9, 13)}.${image?.originalname?.split('.')[1]}`

        const image_path = `src/files/${image_name}`

        writeFileSync(image_path, image.buffer)

        const image_stream = createReadStream(image_path)

        uploadParams.Key = path.basename(image_name)
        uploadParams.Body = image_stream

        const res = await s3.upload(uploadParams).promise()

        if (res) {
            unlinkSync(image_path)
            return res.Location
        }
    }
}