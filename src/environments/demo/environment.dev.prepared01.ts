// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=demo` then `environment.demo.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  demo: true,
  delay: 100,

  channelCount: 3,
  SNACK_DURATION: 2000,

  MONITORING_PORT: 8081,

  DEFAULT_LANGUAGE: 'en',
  LANGUAGES: 'hu',

  // authentication toket valid for 15 mins
  USER_TOKEN_EXPIRY: 60*15,

  // monitoring arm types
  ARM_AWAY: 'arm_away',
  ARM_STAY: 'arm_stay',
  ARM_DISARM: 'disarm',

  // alert types
  ALERT_AWAY: 'alert_away',
  ALERT_STAY: 'alert_stay',
  ALERT_SABOTAGE: 'alert_sabotage',

  // monitoring system states
  MONITORING_STARTUP: 'monitoring_startup',
  MONITORING_READY: 'monitoring_ready',
  MONITORING_UPDATING_CONFIG: 'monitoring_updating_config',
  MONITORING_INVALID_CONFIG: 'monitoring_invalid_config',
  MONITORING_ARMED: 'monitoring_armed',
  MONITORING_SABOTAGE: 'monitoring_sabotage',
  MONITORING_ERROR: 'monitoring_error',

  ROLE_TYPES : {
    ADMIN: 'admin',
    USER: 'user'
  }
};

export const NOTIFICATION_CONFIGURATION = [
  {
    option: 'notifications',
    section: 'email',
    value: {
      smtp_username: "test_user",
      email_address: "target_user@domain.com",
      smtp_password: "password"
    }
  },
  {
    option: 'notifications',
    section: 'gsm',
    value: {
      pin_code: "1234",
      phone_number: "0036123456789"
    }
  },
  {
    option: 'notifications',
    section: 'subscriptions',
    value: {
      email: {
        alert_started: true,
        alert_stopped: true
      },
      sms: {
        alert_started: true, 
        alert_stopped: true
      }
    }
  },
  {
    option: 'network',
    section: 'dyndns',
    value: {
      username: "user",
      hostname: "my-example-host.com",
      provider: "noip",
      password: "password"
    }
  },
  {
    option: 'network',
    section: 'access',
    value: {
      ssh: true
    }
  }
];

export const USERS = [
  {
    id: 0,
    name: 'Administrator',
    email: 'admin@example.com',
    role: environment.ROLE_TYPES.ADMIN,
    hasRegistrationCode: true,
    registrationCode: 'ABCDEF000001',
    accessCode: 1234,
    comment: '',
    registrationExpiry: ''
  },
  {
    id: 1,
    name: 'User 1',
    email: 'user1@example.com',
    role: environment.ROLE_TYPES.USER,
    hasRegistrationCode: true,
    registrationCode: 'ABCDEF000002',
    accessCode: 1111,
    comment: '',
    registrationExpiry: ''
  }
];

export const SENSORS = [
  {
    id: 0,
    channel: 0,
    zoneId: 0,
    typeId: 1,
    alert: false,
    description: 'Teszt',
    enabled: true
  }
];

export const SENSOR_TYPES = [
  {
    id: 1,
    name: 'Motion',
    description: 'Motion sensor',
  },
  {
    id: 2,
    name: 'Tamper',
    description: 'Tamper sensor',
  },
  {
    id: 3,
    name: 'Open',
    description: 'Open sensor',
  },
  {
    id: 4,
    name: 'Break',
    description: 'Break sensor',
  }
];

export const ZONES = [
  {
    id: 0,
    name: 'Hall',
    disarmedDelay: null,
    awayDelay: 0,
    stayDelay: 5,
    description: 'Hall movement, alert with delay if stay armed'
  },
  {
    id: 1,
    name: 'Tamper',
    disarmedDelay: 0,
    awayDelay: 0,
    stayDelay: 0,
    description: 'Sabotage'
  }
];

export const ALERTS = [];

export const KEYPAD_TYPES = [
  {
    id: 1,
    name: 'DSC',
    description: 'DSC keybus (DSC PC-1555RKZ)'
  }
];

export const KEYPADS = [
  {
    id: 1,
    typeId: 1,
    enabled: true
  }
];
