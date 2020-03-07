window.onload = function() {
  let myLiffId = "1653926328-kewjzv9B"
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
      getProfile();
      
      document.getElementById("btnSubmit").addEventListener("click", () => {
        if (notEmpty() == "Terisi"){
            liff.closeWindow();
        }
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