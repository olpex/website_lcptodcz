import { notFound } from 'next/navigation';
import { getCmsUpload } from '../../../lib/cms';

type UploadRouteProps = {
  params: {
    file: string;
  };
};

export const dynamic = 'force-dynamic';

export async function GET(_request: Request, { params }: UploadRouteProps) {
  const upload = await getCmsUpload(params.file);

  if (!upload) {
    notFound();
  }

  return new Response(upload.data, {
    headers: {
      'content-type': upload.mimeType,
      'content-disposition': `inline; filename="${encodeURIComponent(upload.fileName)}"`,
      'cache-control': 'public, max-age=3600',
    },
  });
}
