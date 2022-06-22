var config = {
  apiKey: "AIzaSyA0o46jRmw6OghL2fcpdIcNWDeG1EQ5upQ",
  authDomain: "tradetips-9baa3.firebaseapp.com",
  databaseURL: "https://tradetips-9baa3.firebaseio.com",
  projectId: "tradetips-9baa3",
  type: "service_account",
  project_id: "tradetips-9baa3",
  storageBucket: "tradetips-9baa3.appspot.com",
  messagingSenderId: "592114858590",
  appId: "1:592114858590:web:2e2f77237953b570fb52cf",
  measurementId: "G-B3RPK4JXG3",
  private_key_id: "9efaa0e3e7bf1fac231c69b552514e210442b223",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDoxICupYmqJ8yY\nmWkKk8lWp3dKzdAfOkAuyb8yrD9WWYOSUsAMIBY+irMBy74uFeJry8hfHicsBWSW\nuzL04S2S6dlJfeuBFI7GmgNIUG3GDfBROKeUS/XUzY2qg0+dNvgYgFbzoBNc0sMH\nxf4Ezarp/3CDqroWQRD0hvn2zUjNOnWqMP4NcZZfhyNJJcrFyvEWcMs8gWR0r+fQ\nijbGVgqf1n9T+HpGBXkXi9X3tZHe3HW4P6n0gjLU1eU8kOr6V6LDDAngp6ESsuQJ\nAyN81Sz9Axi4hygyWl7Oq7zpitVQxjHwzdMuWMGb/GbnHsleJRYHErk85qaHAvp1\nuS416baJAgMBAAECggEACe+VZJ8ZVMOVJrBpvPNZBVNpsq49Y4/bfIPNHw8eNwPk\nK2NP4lSeTnYiNQHq8NGrVBmjSHgjiOwEArEj+DMCfIJx7YKsAlsLyyt412XjgbBH\noVfvQ1PIvxg1I2GujNHzXixgSc779Jrki1jmwnK7CHkIZv5rKhcF78IxOllB8cyn\nsDdEOkYPAvYeVpIG1j3JQD4Yeo5xyT/MEhzZKqvNeg+uKkDS9R3P5jz94gRTbAtv\n3sKuS6Hrx2tn+BmqhpG1YFlKGMeTpAN42Jf96HJZQQvzho1AmTJh1Ep3fCgMOYhW\n0IJa1JnfVlHlZrL2NmLJ7ac+7yCIBPCXGtkihaHmzwKBgQD4g3si7vB2PBFTXxX5\nTJ0LubY/zyMp0sja/Rp2JYVVHh2WNHa6/TKyxksCG2OlMHbHV99QTrBuIyVYPWbN\njGPeQQAwd+y31RhHyePG99gwxvY8rRSzrEoPev6/6LHM5MdPqNzyujY0w0kUp5UR\nUyANKnCVeOll4IEmApBNfT3UhwKBgQDvx5buPbqdGA4mPKmEq/TLUy4OXVCnd1e3\nOe95qQIcbChCCAkSVeJ3nSvE5d0eBGJNlhaWeTA3DP/963o4frkRmaQJK9BsXdnb\nVj5iG3QRRKCYpamH1kY1AHc/G7P7a4hBPJ+4yblpGBiC7EayG9uBhgDA2sdLOPWW\nF1pZ20TwbwKBgAjz66a5hu4rgdBIF6mQigPXH+qykqi6EERbY+2nsmL7n8M+hpx7\n7KymGiOsSu2zjkPmNYRWIWMGXx0LsT1sdliWbORSHbQNuD811b/gQ+iV8l8DOUCz\nz0M5gh31yxn/j/KducAA110VP/e/hc5G+VugEMhBv97MtLpi00IHZgfXAoGBAIBq\nmWfQwY/+4R0TYgp++aSnUMQ6r8ZwwRaNPbcfj9TfDBSJLyqVuqsrDtTt8qVv3aIF\n3uUJ1Iu3N6arJZL6M228pkCPKZnQDaxNnS133IqfAY+fMZNha8pZDIRM9vCRH7Eo\nobYau2UQlZgQqLAdAUt2FBM1WITt5YFT0nzLVTmbAoGBAO/p5zqkeQ3Yjt7qIs8g\nbQTByK/9TsDRdiK9RfsEKuq70BHLuyYoW6jt9yR4AlbQHEFjGek9mWw4k45aZB5P\n2vjISHPiQoAAGVE9eowmvcckYn+IFFkNIs9s3UBX1d2RBzOgy3XMYE897DWGmKc+\n7F3mTXJtUyyjUqERXKBTYxN0\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-olv1b@tradetips-9baa3.iam.gserviceaccount.com",
  client_id: "112955508654296836542",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zgd2j%40chatdemo-96e4f.iam.gserviceaccount.com",
  vapidKey: 'BN2e4vqb2-OY-QX6Z0531oQ1pSiiEUNQU2SEcSaEiMvJFcy8unSAW6gPrFJQeHz0VQyPu2JLqVuaFDnfeDmpy3o'
 
};

firebase.initializeApp(config);


var db = firebase.firestore();


function getGroupDetail() {

       var monthlies = db.collection("/basilPrivateGroup").doc("Production").get();
       monthlies.then((res) => {
        // console.log(res.data().groupCode);
        document.getElementById('room-button-2').innerText = "Enter " + res.data().groupTitle + " Room";

       });


}

 getGroupDetail();

function getGroupDetailroomOne() {

       var monthlies = db.collection("/openGroups").doc("roomOne").get();
       monthlies.then((res) => {
        // console.log(res.data().groupCode);
        document.getElementById('room-button-1').innerText = "Enter " + res.data().groupTitle + " Room";

       });


}

 getGroupDetailroomOne();


function CodeSubmit(){
  event.preventDefault();
    var monthlies = db.collection("/basilPrivateGroup").doc("Production").get();
       monthlies.then((res) => {
        // console.log(res.data().groupCode);
          var enterCode    = document.getElementById('pcode');
          if(enterCode.value == res.data().groupCode){
            console.log("true");
            window.location.href="/chatWindowAdminUser";
          }else{
            console.log("false");
            alert("You enter Wrong code !!");
          }
  // console.log("get group detail value  " + getGroupDetail());

       });


}