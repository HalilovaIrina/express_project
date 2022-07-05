import dotenv from 'dotenv';
import path from "path";

const configPth = path.resolve("config", ".env");
console.log(`Read config from ${configPth}`);
const res = dotenv.config({path: configPth})
const DB_CONNECTION_STRING = res.parsed.DB_CONNECTION_STRING;
if (!DB_CONNECTION_STRING) {
    throw new Error("Settings error: DB_CONNECTION_STRING is not specified");
}
const settings = {
    PORT: res.parsed.PORT ?? 3000,
    DB_CONNECTION_STRING,
}


export default settings;