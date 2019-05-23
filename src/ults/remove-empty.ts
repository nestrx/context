export function removeEmpty(obj): any {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      this.removeEmpty(obj[key]);
    } else if (obj[key] === null || obj[key] === '' || obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
}
