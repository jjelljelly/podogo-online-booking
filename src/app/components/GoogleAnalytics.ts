export function setGoogleAnalytics() {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-L1H6ZXC8ZN";
    script.async = true;
    const script2 = document.createElement("script");
    script2.text = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-L1H6ZXC8ZN');`;
    document.head.appendChild(script);
    document.head.appendChild(script2);
}
