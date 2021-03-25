const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-xinyiliu",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://kkkzkssc42.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Y4VlikIIu",
      APP_CLIENT_ID: "7khnnq08c3qobgbkic9pbto7m1",
      IDENTITY_POOL_ID: "us-east-1:fa5024ba-0774-4c63-86e0-5eaac47de2e2",
    },
  };

  export default config;