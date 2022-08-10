 // Below are the variables and what they equal so they can be used
         const form = document.getElementById('form-CANVAS')
          const tabs = document.getElementById('number-of-tabs')
          const btns = document.getElementById('number-of-buttons')
          const submit = document.getElementById('button-submit')
          const outputCode = document.getElementById('outputCode')
          const btnAll = document.getElementById('full-tab')
const tabComplete = (`&lt;div style="width: 900px; margin: 0 auto;"&gt
    &lt;div class="enhanceable_content tabs"&gt
        &lt;ul&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-1"&gtType Tab 1 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-2"&gtType Tab 2 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-3"&gtType Tab 3 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-4"&gtType Tab 4 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-5"&gtType Tab 5 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-6"&gtType Tab 6 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-7"&gtType Tab 7 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-8"&gtType Tab 8 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-9"&gtType Tab 9 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
            &lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-10"&gtType Tab 10 Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt
        &lt;/ul&gt
        &lt;div id="tab-1"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 1 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"&gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 1 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 1 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 1 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 1 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-2"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 2 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 2 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 2 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 2 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 2 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-3"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 3 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 3 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 3 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 3 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 3 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-4"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 4 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 4 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 4 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 4 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 4 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-5"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 5 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 5 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 5 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 5 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 5 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-6"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 6 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 6 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 6 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 6 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 6 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-7"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 7 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2  Name for Tab 7 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 7 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 7 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 7 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-8"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="PAST LINK HERE"&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 8 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 8 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 8 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 8 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 8 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-9"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 9 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 9 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 9 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 9 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 9 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
        &lt;div id="tab-10"&gt
            &lt;p&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 1 Name for Tab 10 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 2 Name for Tab 10 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 3 Name for Tab 10 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"   &gt&lt;span style="font-family: impact, chicago;"&gtType Button 4 Name for Tab 10 Here&lt;/span&gt&lt;/a&gt&lt;a class="btn btn-large btn-info" style="width: flex; background-color: #d09800; color: white;" href=""&gt&lt;span style="font-family: impact, chicago;"&gtType Button 5 Name for Tab 10 Here&lt;/span&gt&lt;/a&gt&lt;/p&gt
        &lt;/div&gt
    &lt;/div&gt
&lt;/div&gt`)
const copyCode = document.getElementById("copyCode") 
//This worked but does not use user input
// function all(){
//   outputCode.innerHTML = tabComplete;
// } 
// btnAll.addEventListener('click', all);

  function createTemplateStringTabsBtns (tab_number, btn_number) {
    let complete_tablists = ""
    let complete_tabBtn = ""
    

    for (let tl_index = 1; tl_index <= tab_number; tl_index++) {
        complete_tablists = complete_tablists + `&lt;li&gt&lt;span style="font-family: impact, chicago;"&gt&lt;a style="text-decoration: none; background-color: #4169e1; color: white;" href="#tab-${tl_index}"&gtType Name Here&lt;/a&gt&lt;/span&gt&lt;/li&gt` + "\n"
        complete_tabBtn = complete_tabBtn + `&lt;div id="tab-${tl_index}"&gt&lt;p&gt` + "\n"
        for (let btn_index = 1; btn_index <= btn_number; btn_index++) {
            complete_tabBtn = complete_tabBtn + `&lt;a class="btn btn-large btn-info" style="font-family: impact, chicago; width: flex; background-color: #d09800; color: white;" href="INSERT LINK TO PAGE HERE"&lt;span style="font-family: impact, chicago;"&gtType Button ${btn_index} Name for Tab ${tl_index} Here&lt;/span&gt&lt;/a&gt` + "\n"
            
        }
      complete_tabBtn = complete_tabBtn + `&lt;/div&gt`
    }
    let complete_code = `&lt;div style="width: 900px; margin: 0 auto;"&gt
    &lt;div class="enhanceable_content tabs"&gt` + complete_tablists + "\n" + complete_tabBtn +  `
    &lt;/div&gt
&lt;/div&gt`;
    return complete_code
  } 

function done () {
  const N_tabs = document.getElementById('number-of-tabs').value
  const N_btns = document.getElementById('select-number-of-buttons').value
  const outputCode = document.getElementById('outputCode')
  let view_code = createTemplateStringTabsBtns(N_tabs, N_btns)
  outputCode.innerHTML = view_code
}
btnAll.addEventListener('click', done);

//OLD
// function copyText(htmlelement) {
//   if(!htmlElement) {
//     return
//   }
//   let elementext = htmlElement.innerText;

//   let inputElement = inputElement.select();
//   document.execCommand('copy');
// }
// document.querySelector('#copyCode').onclick = function ()
// {
//  copyText(document.getElementById('outputCode').innerText) 
// }
//PAST tries
//This created a button, but I could not figure out how to move the button, or attach it to the other functions currently.
// let btnAp = document.createElement("button");
// btnAp.innerHTML = "Copy Code";
// btnAp.addEventListener("click", function () {
//   alert("Text Copied to Clipbaord");
//   copyText("outputCode");
// });
// document.body.appendChild(btnAp);


// function copyText(el_id) {
//             var Text = document.getElementById(el_id);
//             textSelect();
//             navigator.clipboard.writeText(Text.value);
//             document.getElementById("clipboard").innerHTML = Text.value;
// }


// copyCode.addEventListener('click', copyText);
//Draft 3
// copyCode.onclick = function () {
//   outputCode.select();
//   document.execCommand("copy");
// }




  //OLD
// trying to use a function to get the code thorugh.
// button.onclick = function() {
//   if(btnAll = "click"){
//     outputCode.innerHTML = tabComplete.value;
//   }
// }
          
          //variable to recieve the number of tabs
          // const tabNumber (){
          //     document.querySelector('tabs').value;
          // }
          // // For Loop Tabs
          //   for (let tabNumber = 0; tabNumber <= 10; i++){
          //       //output += tabCode I don't know what this dose right now.d7rt6
          //   }
          //    let output() {
          //     tabCode.innerHTML = tabCode.value;
          // } 
          // submit.addEventListener('click', tabNumber);
// const copyCode = document.getElementById("copyCode") 
