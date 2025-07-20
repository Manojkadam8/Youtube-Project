document.getElementById("Os").innerText="Operating System :" + navigator.userAgentData.platform;

document.getElementById("Browser").innerText="Browser:"+(navigator.userAgentData.brands[2].brand);

document.getElementById("Devicetype").innerText="Device Type:"+(navigator.userAgentData.mobile?"Mobile":"Desktop")

document.getElementById("SreenSize").innerText="SreenSize:"+screen.width+"x"+screen.height;

document.getElementById("Language").innerText="Language:"+navigator.language;


navigator.getBattery().then(battery=>document.getElementById("BatteryLevel").innerText=`BatteryLevel : ${battery.level*100} %`)

document.getElementById("Cookies").innerText="cookies:"+(navigator.cookieEnabled?"Enable":"Diasable")

document.getElementById("Onlinestatus").innerText="Onlinestatus:"+(navigator.onLine?"Online":"Offline")

document.getElementById("TouchSupported").innerText="TouchSupported:"+(navigator.maxTouchPoints?"Yes":"No")

console.log(navigator.userAgentData)



