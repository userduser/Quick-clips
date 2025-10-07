// Simple mock env for development
export const env = {
  AUTH_SECRET: process.env.AUTH_SECRET || "mock-auth-secret",
  DATABASE_URL: process.env.DATABASE_URL || "postgresql://mock:mock@localhost:5432/mock",
  NODE_ENV: process.env.NODE_ENV || "development",
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || "mock-access-key",
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || "mock-secret-key",
  AWS_REGION: process.env.AWS_REGION || "us-east-1",
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || "mock-bucket",
  PROCESS_VIDEO_ENDPOINT: process.env.PROCESS_VIDEO_ENDPOINT || "https://mock-endpoint.com",
  PROCESS_VIDEO_ENDPOINT_AUTH: process.env.PROCESS_VIDEO_ENDPOINT_AUTH || "mock-auth",
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_mock",
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "sk_test_mock",
  STRIPE_SMALL_CREDIT_PACK: process.env.STRIPE_SMALL_CREDIT_PACK || "price_mock",
  STRIPE_MEDIUM_CREDIT_PACK: process.env.STRIPE_MEDIUM_CREDIT_PACK || "price_mock",
  STRIPE_LARGE_CREDIT_PACK: process.env.STRIPE_LARGE_CREDIT_PACK || "price_mock",
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "whsec_mock",
};
