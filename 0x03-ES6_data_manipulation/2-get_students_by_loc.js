export default function getStudentsByLocation(objs, city) {
  if (Array.isArray(objs)) {
    return objs.filter((obj) => obj.location === city);
  }
  return [];
}
