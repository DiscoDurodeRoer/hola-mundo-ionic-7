import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'hello_world',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
