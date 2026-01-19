function askAI() {

 let q = document.getElementById("question").value;
 let disease = "{{ prediction['name'] if prediction }}";

 fetch('/chat', {
   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
       message: q,
       disease: disease
   })
 })
 .then(r => r.json())
 .then(data => {
   document.getElementById("answer").innerText =
        data.reply;
 });

}
