// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=demo` then `environment.demo.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  demo: true,
  aotTranslations: true,
  delay: 100,

  channel_count: 3,
  SNACK_DURATION: 2000,

  MONITORING_PORT: 8081,

  DEFAULT_LANGUAGE: 'en',
  LANGUAGES: 'hu',

  // monitoring arm types
  ARM_AWAY: 'away',
  ARM_STAY: 'stay',
  ARM_DISARM: 'disarm',

  // monitoring system states
  MONITORING_STARTUP: 'monitoring_startup',
  MONITORING_READY: 'monitoring_ready',
  MONITORING_UPDATING_CONFIG: 'monitoring_updating_config',
  MONITORING_INVALID_CONFIG: 'monitoring_invalid_config',
  MONITORING_ARMED: 'monitoring_armed',
  MONITORING_SABOTAGE: 'monitoring_sabotage',

  ROLE_TYPES : {
    ADMIN: 'admin',
    USER: 'user'
  }
};

export const CONFIGURATION = [];

export const USERS = [
  {
    id: 0,
    name: 'Administrator',
    role: environment.ROLE_TYPES.ADMIN,
    access_code: 1234
  },
  {
    id: 1,
    name: 'User 1',
    role: environment.ROLE_TYPES.USER,
    access_code: 1111
  }
];

export const SENSOR_TYPES = [
  {
    id: 0,
    name: 'Motion',
    description: 'Motion sensor',
  },
  {
    id: 1,
    name: 'Break',
    description: 'Break sensor',
  },
  {
    id: 2,
    name: 'Open',
    description: 'Open sensor',
  },
  {
    id: 3,
    name: 'Tamper',
    description: 'Tamper sensor',
  }
];

export const SENSORS = [];

export const ZONES = [];

export const ALERTS = [];
