/* jshint esversion: 8 */

import CryptoJS from 'crypto-js';

export const encryptData = (data, docKey) => CryptoJS.AES.encrypt(data, docKey);

export const decryptData = (data, docKey) =>
  CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(data, docKey));

export const encryptObjectToJSON = (data, seed) => {
  data = JSON.stringify(data);
  let encryptedData = encryptData(data, seed);
  data = {encrypted:encryptedData.toString()};
  data = JSON.stringify(data);
  return data;
};

export const decryptJSONToObject = (data, seed) =>
  JSON.parse(decryptData(JSON.parse(data).encrypted, seed));
