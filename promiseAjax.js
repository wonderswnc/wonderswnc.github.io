export const request = function(url, method, options = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.onload = resolve(xhr.responseText)
    xhr.ontimeout = reject()
    xhr.
    xhr.send()

  })
}