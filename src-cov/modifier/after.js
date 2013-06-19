/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['modifier/after.js']) {
  _$jscoverage['modifier/after.js'] = [];
  _$jscoverage['modifier/after.js'][19] = 0;
  _$jscoverage['modifier/after.js'][21] = 0;
  _$jscoverage['modifier/after.js'][23] = 0;
  _$jscoverage['modifier/after.js'][42] = 0;
  _$jscoverage['modifier/after.js'][43] = 0;
  _$jscoverage['modifier/after.js'][53] = 0;
  _$jscoverage['modifier/after.js'][65] = 0;
  _$jscoverage['modifier/after.js'][66] = 0;
  _$jscoverage['modifier/after.js'][78] = 0;
  _$jscoverage['modifier/after.js'][79] = 0;
  _$jscoverage['modifier/after.js'][86] = 0;
  _$jscoverage['modifier/after.js'][87] = 0;
}
_$jscoverage['modifier/after.js'].source = ["/**","* After Modifier","* (c) 2013 Bill, BunKat LLC.","*","* Modifies a constraint such that all values that are greater than the","* specified value are considered valid.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","","/**","* Creates a new modified constraint.","*","* @param {Constraint} constraint: The constraint to be modified","* @param {Integer} value: The starting value of the after constraint","*/","later.modifier.after = later.modifier.a = function(constraint, values) {","","  var value = values[0];","","  return {","","    /**","    * Returns the name of the constraint with the 'after' modifier.","    */","    name: 'after ' + constraint.name,","","    /**","    * Pass through to the constraint.","    */","    range: (constraint.extent(new Date())[1] - value) * constraint.range,","","    /**","    * The value of the specified date. Returns value for any constraint val","    * that is greater than or equal to value.","    *","    * @param {Date} d: The date to calculate the value of","    */","    val: function(d) {","      var cVal = constraint.val(d);","      return cVal &gt;= value ? value : cVal;","    },","","    /**","    * Returns true if the val is valid for the date specified.","    *","    * @param {Date} d: The date to check the value on","    * @param {Integer} val: The value to validate","    */","    isValid: function(d, val) {","      return this.val(d) === val;","    },","","    /**","    * Pass through to the constraint.","    */","    extent: constraint.extent,","","    /**","    * Pass through to the constraint.","    */","    start: function(d) {","        if(constraint.val(d) === value) return d;","        return constraint.start(constraint.prev(d, value));","    },","","    /**","    * Pass through to the constraint.","    */","    end: constraint.end,","","    /**","    * Pass through to the constraint.","    */","    next: function(startDate, val) {","        if(val &gt; value) val = constraint.extent(startDate)[0];","        return constraint.next(startDate, val);","    },","","    /**","    * Pass through to the constraint.","    */","    prev: function(startDate, val) {","        if(val &gt;= value) val = constraint.extent(startDate)[1];","        return constraint.prev(startDate, val);","    }","","  };","","};"];
_$jscoverage['modifier/after.js'][19]++;
later.modifier.after = (later.modifier.a = (function (constraint, values) {
  _$jscoverage['modifier/after.js'][21]++;
  var value = values[0];
  _$jscoverage['modifier/after.js'][23]++;
  return ({name: ("after " + constraint.name), range: ((constraint.extent(new Date())[1] - value) * constraint.range), val: (function (d) {
  _$jscoverage['modifier/after.js'][42]++;
  var cVal = constraint.val(d);
  _$jscoverage['modifier/after.js'][43]++;
  return ((cVal >= value)? value: cVal);
}), isValid: (function (d, val) {
  _$jscoverage['modifier/after.js'][53]++;
  return (this.val(d) === val);
}), extent: constraint.extent, start: (function (d) {
  _$jscoverage['modifier/after.js'][65]++;
  if ((constraint.val(d) === value)) {
    _$jscoverage['modifier/after.js'][65]++;
    return d;
  }
  _$jscoverage['modifier/after.js'][66]++;
  return constraint.start(constraint.prev(d, value));
}), end: constraint.end, next: (function (startDate, val) {
  _$jscoverage['modifier/after.js'][78]++;
  if ((val > value)) {
    _$jscoverage['modifier/after.js'][78]++;
    val = constraint.extent(startDate)[0];
  }
  _$jscoverage['modifier/after.js'][79]++;
  return constraint.next(startDate, val);
}), prev: (function (startDate, val) {
  _$jscoverage['modifier/after.js'][86]++;
  if ((val >= value)) {
    _$jscoverage['modifier/after.js'][86]++;
    val = constraint.extent(startDate)[1];
  }
  _$jscoverage['modifier/after.js'][87]++;
  return constraint.prev(startDate, val);
})});
}));