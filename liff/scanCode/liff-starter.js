// line://app/1653926328-BDOQPjrE
window.onload = function() {
  let myLiffId = "1653926328-BDOQPjrE";
  initializeLiff(myLiffId);
};

/**
 * Initialize LIFF
 * @param {string} myLiffId The LIFF ID of the selected element
 */
async function initializeLiff(myLiffId) {
  await liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
        // window.location = "./form.html"
    })
    .catch(err => {
      window.location = "./"
    });
  // if (liff.scanCode) {
    await liff.scanCode().then(result => {
      console.log(result);
      document.getElementById("test").value = result.value;
    })
  // }
}