import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import dotenv from "dotenv";
import { v4 } from 'uuid';

dotenv.config()

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials: {
      accessKeyId: accessKey || "",
      secretAccessKey: secretAccessKey || ""
    },
    region : bucketRegion,
})

export async function GET(request: Request) {
  const url = new URL(request.url);
  const count = url.searchParams.get('count');

  if (!count) {
    return Response.json(
      { message: 'Missing count parameter' },
      { status: 400 }
    );
  }

  const keys = Array.from({ length: Number(count) }, () => v4());

  const urls = await Promise.all(
    keys.map((key) =>
      getSignedUrl(
        s3,
        new PutObjectCommand({
          Bucket: 'test',
          Key: key,
          ACL: 'public-read',
        }),
        {
          expiresIn: 60 * 60,
        }
      )
    )
  );

  return Response.json({
    uploadUrls: urls,
    accessUrls: keys.map((key) => process.env.PUB_URL + key),
  });
}