import aws, { S3 } from 'aws-sdk'
import path from 'path'
import multerConfig from '../config/multer'
import mime from 'mime'
import { readFileSync, unlinkSync } from 'fs'

class S3Storage {
  private client: S3

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    })
  }

  async saveFile(fileName: string): Promise<void> {
    const originalPath = path.resolve(multerConfig.directory, fileName)

    const contentType = mime.getType(originalPath)

    if (!contentType) {
      throw new Error('File not found')
    }

    const fileContent = await readFileSync(originalPath)

    this.client
      .putObject({
        Bucket: 'list-marry',
        Key: fileName,
        ACL: 'public-read',
        Body: fileContent,
        ContentType: contentType,
      })

      .promise()

    await unlinkSync(originalPath)
  }
}

export default S3Storage
