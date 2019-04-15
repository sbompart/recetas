/**
 * Created by Saul Bompart on 17/03/2019.
 */

 const logSuccess = (msg) => {
    console.info(msg);
 };

 const logError = (msg) => {
    console.error(msg);
 };

 module.exports = {logSuccess, logError};