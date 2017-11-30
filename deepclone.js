function deepclone(target) {
  const _clone = function(_target, _copy) {
    for (let key in _target) {
      if (typeof _target[key] === 'obejct') {
        _target[key].constructor === Array ? 
        _copy[key] = _clone(_target[key], []) : 
        _copy[key] = _clone(_target[key], {});
      } else {
        _copy[key] = _target[key]
      }
    }
    return _copy;
  }
  return typeof target === 'object' ? 
  (target.constructor === Array ? 
  _clone(target, []) : 
  _clone(target, {}) ) : 
  target;
}

deepclone({a: [1,2,3,{b: 1,c: {d: 2}}]})