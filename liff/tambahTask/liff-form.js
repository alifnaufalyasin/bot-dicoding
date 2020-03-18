window.onload = function() {
  let myLiffId = "1653926328-kewjzv9B"
  initializeLiff(myLiffId);
  
  $("#tanggal").flatpickr({
    minDate: new Date().fp_incr(2),
    maxDate: new Date().fp_incr(60),
    "locale": "id",
    "disable": [
      function(date) {
          // to disable damn sunday
          return (date.getDay() === 0);
      }
    ]
  });

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
      await getProfile();
      
      document.getElementById("btnSubmit").addEventListener("click", () => {
          liff.sendMessages([
            {
              type:'text',
              text:'Berhasil menambahkan task'
            }
          ])
          .then(() => {
            console.log('message sent');
            liff.closeWindow();
          })
          .catch((err) => {
            console.log('error', err);
          });  
      });
    })
    .catch(err => {
      window.location = "./form.html";
    });
}

const getProfile = () => {
  liff
    .getProfile()
    .then(profile => {
      document.getElementById("btnSubmit").style.visibility = "visible";
      document.getElementById("userId").value = profile.userId;
      document.getElementById("displayNameField").textContent = "Hai, " + profile.displayName;
      return profile;
    })
    .catch(e => {
      console.log(e);
    });
};

function notEmpty() {
  const status =  (document.getElementById("inputTask").value !== "" );
  if (status){
    return ("Terisi")
  }else{
    return ("inputTask")
  }
    
}
