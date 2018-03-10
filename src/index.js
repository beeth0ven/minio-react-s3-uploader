import React from 'react';
import { render } from 'react-dom';
import ReactS3Uploader from 'react-s3-uploader';

const Root = () => (<div>
  <h1>Minio React S3 Uploader</h1>
  <ReactS3Uploader
    signingUrl='/s3/sign'
    accept='image/*'
    onProgress={(progressInPercent, uploadStatusText) => {
      console.log('onProgress');
      console.log('progressInPercent', progressInPercent);
      console.log('uploadStatusText', uploadStatusText);
    }}
    onError={(error) => {
      console.log('onError');
      console.log('error', error);
    }}
    onFinish={(uploadDetails) => {
      console.log('onFinish');
      console.log('uploadDetails', uploadDetails);
    }}
  />
</div>);

render(
  (<Root/>),
  document.getElementById('root')
);
