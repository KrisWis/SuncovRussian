export interface UTAPIFileInList {
  id: string;
  customId: string;
  key: string;
  name: string;
  status: string;
  size: number;
  uploadedAt: number;
}

interface UTAPIFileForUploadBucket {
  id: number;
  name: string;
  region: string;
  provider: string;
  providerOwnerId: string;
  createdAt: string;
}

export interface UTAPIFileForUpload {
  appId: string;
  fileKey: string;
  fileUrl: string;
  fileType: string;
  callbackSlug: string;
  callbackUrl: string;
  metadata: string;
  fileName: string;
  fileSize: number;
  customId: null;
  acl: string;
  bucket: UTAPIFileForUploadBucket;
  apiKey: string;
}
