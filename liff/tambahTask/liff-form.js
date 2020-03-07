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
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCN4Nsxs3dZkTn2KaiVCh-_nEjBQU953c4",
        authDomain: "ketringandevmode-vulpjl.firebaseapp.com",
        databaseURL: "https://ketringandevmode-vulpjl.firebaseio.com",
        projectId: "ketringandevmode-vulpjl",
        storageBucket: "ketringandevmode-vulpjl.appspot.com",
        messagingSenderId: "55746506926",
        appId: "1:55746506926:web:1def749e6cd86fbeb1fd3f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      var fb = firebase.database();
      var fbref = fb.ref("session");

      getProfile(fbref);
      
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

const getProfile = fbref => {
  liff
    .getProfile()
    .then(profile => {
      fbref
        .child(profile.userId)
        .once("value")
        .then(docs => {
          data = docs.toJSON();
          console.log(data);
          var valid = true;
          
          if (data["nama"] !== undefined){
            document.getElementById("inputNama").value = data["nama"];
            document.getElementById("inputNomor").value = data["nomor"];
            document.getElementById("Catatan").value = data["catatan"];
            document.getElementById("Alamat").value = data["alamat"];  
          }
          document.getElementById("btnSubmit").style.visibility = "visible";
        });
      document.getElementById("userId").value = profile.userId;
      document.getElementById("displayNameField").textContent =
        "Hai, " + profile.displayName;
      return profile;
    })
    .catch(e => {
      console.log(e);
    });
};

function notEmpty() {
  const statNama =  (document.getElementById("inputNama").value !== "" );
  const statNomor = (document.getElementById("inputNomor").value !== "");
  const statCat = (document.getElementById("Catatan").value !== "");
  const statAlamat = (document.getElementById("Alamat").value !== "");
  if (statNama){
    if (statNomor){
      if (statCat){
        if (statAlamat){
          return ("Terisi")
        }else{
          return ("Alamat")
        }
      }else{
        return ("Catatan")
      }
    }else{
      return ("inputNomor")
    }
  }else{
    return ("inputNama")
  }
}
