import"./CFMQYC2y.js";const i=""+new URL("icons.B-5ttSVh.svg",import.meta.url).href,o=""+new URL("images.D6OQ9Bw7.svg",import.meta.url).href,c=""+new URL("licenses.LZTeB7Wx.svg",import.meta.url).href,s={icons:i,images:o,licenses:c};function p(t){return Object.keys(s).includes(t)}function a(t){return t.toLowerCase().replace(/\.svg$/,"").replace(/[^a-z0-9-:]/g,"-").replace(/:/g,"--")}const u=t=>{let[e,r]=t.split("/");if(r||(r=e,e="icons"),!p(e))throw new Error(`Sprite ${e} not found`);const n=s[e];return{sprite:e,icon:r,url:n+`#${a(r)}`,class:`${e}`}};export{u};
