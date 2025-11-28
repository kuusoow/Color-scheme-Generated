const colorInput = document.getElementById('color-input')
const colorType = document.getElementById('colorType')
const genereteBtn = document.getElementById('generete-btn')
const generetedColerElement = document.getElementById('generated-color')

console.log(colorInput.value)
console.log(colorType.value)

// const cleanHex = colorInput.value.replace('#','')


genereteBtn.addEventListener('click', function(){
  const cleanHex = colorInput.value.replace('#','')
  console.log(cleanHex)
  fetch(`https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${colorType.value}&count=5`)
  .then(res=>res.json())
  .then(data =>{
    console.log(data.colors)
    rendergeneretedColor(data.colors)
  })
})

 function rendergeneretedColor(colors){
  let colorDiv =''
  colors.forEach(function(color) {
    // console.log(color)
    colorDiv += `
             <div class="color-box">
        <div data-hex='${color.hex.value}'class="color-img color-box"style="background-color:${color.hex.value};"></div>
        <p class="color-hex-value color-box" id="color"   data-hex='${color.hex.value}'>${color.hex.value}</p>
      </div>
    
    `

document.addEventListener("click", function(e) {
  // console.log(e.target)
  if (e.target.classList.contains("color-box")) {
    //  console.log(e.target)
    const text = e.target.dataset.hex
    console.log(text)
    navigator.clipboard.writeText(text);
    alert("Copied to your clipboard successfully!")
  }
});

    })
  generetedColerElement.innerHTML = colorDiv
}




