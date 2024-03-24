import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY ||
      "",
  },
});

export async function GET(req: Request, res: Response) {
  try {
    const key = uuidv4();
    const signedUrl = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: "ecommerce-team2-uploads",
        Key: key,
        ACL: "public-read",
      }),
      {
        expiresIn: 60 * 60,
      }
    );

    return Response.json({
      signedUrl: signedUrl,
      objectUrl: `https://ecommerce-team2-uploads.s3.ap-southeast-1.amazonaws.com/${key}`,
    });
  } catch (error) {
    console.error("Error getting signed URL:", error);
    throw error;
  }
}
