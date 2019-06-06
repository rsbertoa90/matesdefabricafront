module.exports = {
  apps : [{
    name: 'matesdefabrica.com',
    port:3002,
    script: './node_modules/nuxt/bin/nuxt.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
   /*  args: 'one two', */
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      port:3002,
      user : 'forge',
      host: '159.89.228.17',
      ref  : 'origin/master',
       repo : 'git@github.com:resbertoa90/matesdefabricafront.git', 
      path: '/home/forge/matesdefabrica.com',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
