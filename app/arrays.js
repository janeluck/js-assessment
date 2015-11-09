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
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(el){
      return el === item;
    }).length;
  },

  duplicates : function(arr) {
    var result = [];
    arr.sort().forEach(function(item, index){
      if (item == arr[index+1] && result.indexOf(item) < 0) {
        result.push(item);
      }
    });
    return result;

  },

  square : function(arr) {
    return arr.map(function(item){
      return item * item;
    })
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.forEach(function(item, index) {
      if ( item == target) {
        result.push(index);
      }
    })
    return result;
  }
};
