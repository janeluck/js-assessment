/**
 * Created by janeluck on 11/6/15.
 */
// todo: polyfill [indexOf, forEach]

exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function(item){
      total += item;
    });
    return total;
  },

  remove : function(arr, item) {
    var arr1 = arr.slice();
    while( arr1.indexOf(item) > -1) {
      arr1.splice(arr1.indexOf(item), 1);
    }
    return arr1;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length; i--;) {
      if(arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
console.log(arraysAnswers.remove([1,2,2,3,2,5], 2));