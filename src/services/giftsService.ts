import S3Storage from '../utils/s3Storage'

class GiftsService {
  async uploadImage(file: Express.Multer.File) {
    const s3Storage = new S3Storage()

    await s3Storage.saveFile(file.filename)
  }
}

export default GiftsService
