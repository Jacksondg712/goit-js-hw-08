const e=document.querySelector(".feedback-form"),t=document.querySelector("#inputEmail"),a=document.querySelector("#inputText");let l,o;t.addEventListener("blur",(e=>{const t=e.currentTarget.value;l=t,localStorage.setItem("feedback-form-state-email",l)})),a.addEventListener("blur",(e=>{const t=e.currentTarget.value;o=t,localStorage.setItem("feedback-form-state-text",o)})),window.addEventListener("load",(function(e){!function(){if(!localStorage.getItem("feedback-form-state-email"))return document.getElementById("inputEmail").value="",void(document.getElementById("inputText").value="");document.getElementById("inputEmail").value=localStorage.getItem("feedback-form-state-email"),document.getElementById("inputText").value=localStorage.getItem("feedback-form-state-text")}(),e.preventDefault()})),e.addEventListener("submit",(e=>{e.preventDefault();const t={email:localStorage.getItem("feedback-form-state-email"),text:localStorage.getItem("feedback-form-state-text")};console.log(t),document.getElementById("inputEmail").value="",document.getElementById("inputText").value="",localStorage.clear()}));
//# sourceMappingURL=03-feedback.a12503a7.js.map