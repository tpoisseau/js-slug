/**
 * Slugify a string
 * 
 * 1. normalize NFKD : https://en.wikipedia.org/wiki/Unicode_equivalence#Normalization
 * 2. non-ascii chars will be removed
 * 3. non-alphanum chars transformed into a dash
 * 4. trim dash
 * 
 * @param {string} str - the string to slugify (is casted to String for avoir errors)
 * 
 * @returns {string} slugified string
 */
export default function slug(str='') {
    // transform to string if not
    return String(str)
        .normalize('NFKD') // https://en.wikipedia.org/wiki/Unicode_equivalence#Normalization
        .toLowerCase()
        .replace(/[^\x00-\x7F]+/g, '') // remove non-ascii chars
        .replace(/[^a-z0-9]+/g, '-') // replace non-alphanum chars into a dash
        .replace(/^-+/, '') // trimStart dashes
        .replace(/-+$/, '') // trimEnd dashes
    ;
}