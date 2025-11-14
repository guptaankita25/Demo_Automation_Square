
import { v4 as uuidv4 } from 'uuid';


class randomUtils {

/**
 * Math.floor()
Purpose: Rounds a number down to the nearest whole number (integer).
 
Math.random()
Purpose: Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Example:
Math.random(); // → something like 0.3456 or 0.9123
 */

    async randomAlphabets(length) {
         const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
         let randomString = '';
         for (var i = 0; i < length; i++) {
            var rnum = Math.floor(Math.random() * characters.length);
            randomString = randomString + characters.substring(rnum, rnum + 1);
        }   
        return randomString;
    }

    /**
     * Line	Meaning	Effect
     *+=	Adds the new character to the end	Builds up the full string
    * =	Replaces the entire string	Keeps only the latest character
     */

    async generateRandomNumber(length) {
        const numbers = '123456789';
       let randomString = '';
       for (var i = 0; i < length; i++) {
           var rnum = Math.floor(Math.random() * numbers.length);
           randomString += numbers.substring(rnum, rnum + 1);
        }
        return randomString;
    }

  // getting array list length
    /**
     * It takes one parameter, called array, which will be any list of items (numbers, strings, objects, etc.).
     * Every array has indexes (positions of items), starting from 0 up to array.length - 1.
     * array.length -  length gives the number of elements in the array.
     * Step	What it does
      Math.random()	Get random decimal (0 → 1)
      * array.length	Scale it to array size
      Math.floor(...)	Convert to whole index number
      array[randomIndex]	Get item at that index
     return	Give back that random item 
     */

    /**
     * Retrives a random value from an array
     * @param {Array} arrayList - The array from which to retrieve a random value.
     * @returns {any} A random value from the provided array.
     *
     */
    async getRandomValueFromArray(arrayList) {
        const randomIndex = Math.floor(Math.random() * arrayList.length);
        return arrayList[randomIndex];
    }



























}
export default new randomUtils();