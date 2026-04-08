/// <reference types="astro/client" />

declare module '*.yml' {
  import type { Config } from './types/config';
  const value: Config;
  export default value;
}

declare module '*.yaml' {
  import type { Config } from './types/config';
  const value: Config;
  export default value;
}