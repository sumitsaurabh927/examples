import{c as n}from"./external-api.service.2c850b48.js";const o={}.VITE_API_SERVER_URL,s=async()=>{const t={url:`${o}/api/messages/protected`,method:"GET",headers:{"content-type":"application/json"}},{data:a,error:e}=await n({config:t});return{data:a||null,error:e}},c=async()=>{const t={url:`${o}/api/messages/admin`,method:"GET",headers:{"content-type":"application/json"}},{data:a,error:e}=await n({config:t});return{data:a||null,error:e}};export{c as a,s as g};
