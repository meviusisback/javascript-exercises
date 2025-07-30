const removeFromArray = function(array, ...removed) {
    // Restituisce un nuovo array che include solo gli elementi
    // che NON sono presenti nell'array 'removed'.
    return array.filter(item => !removed.includes(item));
// Do not edit below this line
module.exports = removeFromArray;
