function getLength(value: string | any[]): String {
  if (typeof value === "string") {
    return value.length + ";";
  } else if (Array.isArray(value)) {
    return value.length + ";";
  } else {
    return "0;";
  }
}

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
