import S3 from 'aws-sdk/clients/s3';

import {
  AWS_S3_ACCESS_KEY_ID,
  AWS_S3_BUCKET,
  AWS_S3_REGION,
  AWS_S3_SECRET_ACCESS_KEY,
  MINIO_S3_ACCESS_KEY_ID,
  MINIO_S3_BUCKET,
  MINIO_S3_REGION,
  MINIO_S3_SECRET_ACCESS_KEY,
  USE_MINIO
} from "./config";

import S3Router from 'react-s3-uploader/s3router';

const accessKeyId =     USE_MINIO ? MINIO_S3_ACCESS_KEY_ID      : AWS_S3_ACCESS_KEY_ID;
const secretAccessKey = USE_MINIO ? MINIO_S3_SECRET_ACCESS_KEY  : AWS_S3_SECRET_ACCESS_KEY;
const region =          USE_MINIO ? MINIO_S3_REGION             : AWS_S3_REGION;
const bucket =          USE_MINIO ? MINIO_S3_BUCKET             : AWS_S3_BUCKET;
const endpoint =        USE_MINIO ? 'http://127.0.0.1:9000'     : undefined;

const getS3 = () => new S3({
  accessKeyId,
  secretAccessKey,
  region,
  endpoint,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

const s3Service = new S3Router({
  headers: {'Access-Control-Allow-Origin': '*'},
  bucket,
  ACL: 'public-read',
  getS3,
});

export { s3Service };
