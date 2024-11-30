const config = {
    development: {
        //Database
        Host: process.env.DB_HOST,
        User: process.env.DB_USER,
        Password: process.env.DB_PASSWORD,
        Database: process.env.DB,
        HostFLFant: process.env.DB_FLF5_HOST,
        UserFLFant: process.env.DB_FLF5_USER,
        PasswordFLFant: process.env.DB_FLF5_PASSWORD,
        DatabaseFLFant: process.env.DB_FLF5,
        
        //JSON Web Token
        // tokenSecretKey: process.env.TOKEN
    },

    production: {
        //Database
        Host: process.env.DB_HOST,
        User: process.env.DB_USER,
        Password: process.env.DB_PASSWORD,
        Database: process.env.DB,
        HostFLFant: process.env.DB_FLF5_HOST,
        UserFLFant: process.env.DB_FLF5_USER,
        PasswordFLFant: process.env.DB_FLF5_PASSWORD,
        DatabaseFLFant: process.env.DB_FLF5,

        //JSON Web Token
        // tokenSecretKey: process.env.TOKEN
    }
}

module.exports = config;