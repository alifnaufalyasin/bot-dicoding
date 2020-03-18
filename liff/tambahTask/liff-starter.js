window.onload = function() {
  let myLiffId = 1653926328-kewjzv9B;
  initializeLiff(myLiffId);
};

/**
 * Initialize LIFF
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
        window.location = "./form.html"
    })
    .catch(err => {
      window.location = "./"
    });
}