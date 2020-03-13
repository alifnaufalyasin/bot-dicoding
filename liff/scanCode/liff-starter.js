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
      liff.scanCode().then(result => {
        liff.sendMessages([
          {
            type:'text',
            text: result.value
          }
        ])
        .then(() => {
          console.log('message sent');
          document.getElementById("test").value = result.value;
          // liff.closeWindow();
        })
        .catch((err) => {
          console.log('error', err);
        });  
      })
        // window.location = "./form.html"
    })
    .catch(err => {
      window.location = "./"
    });
}