function formatArguments() {
  let i = 0;
  let args = arguments;
  return this.replace(/\${\w*}/g, () => args[i++] ?? "");
}

function formatParams(params) {
  let str = this;
  for (const key in params) {
    str = str.replace(new RegExp(`\\$\{${key}\}`, "g"), params[key] ?? "");
  }
  return str;
}

String.prototype.format = async function (params) {
  if (typeof params !== "object") {
    return formatArguments.call(this, ...arguments);
  } else {
    return formatParams.call(this, params);
  }
};
