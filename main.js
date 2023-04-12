function cssandjschange() {
    let ua = navigator.userAgent.toLowerCase();
	let isMobile = ua.indexOf("mobile") !== -1 || ua.indexOf("android") !== -1 || ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1;

    if(isMobile === true){
        const script = document.createElement('script');
        script.id = 'mobile_script';
        script.src = 'scripts/mobile_script.js';
        document.head.appendChild(script);

        document.getElementById('css_sheet').href="css/mobile_style.css";
    }

    else {
        const script = document.createElement('script');
        script.id = 'pc_script';
        script.src = 'scripts/pc_script.js';
        document.head.appendChild(script);

        document.getElementById('css_sheet').href="css/pc_style.css";
    }

}

cssandjschange();




