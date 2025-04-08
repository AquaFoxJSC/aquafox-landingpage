import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'aquafox-cms.s3.ap-southeast-1.amazonaws.com',
      'aquafox-s3-bucket.s3.ap-southeast-1.amazonaws.com',
    ],
  },
};

export default nextConfig;
