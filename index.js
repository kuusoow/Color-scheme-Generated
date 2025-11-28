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
    console.log(color)
    colorDiv += `
             <div class="colors">
        <div class="color-img" style="background-color:${color.hex.value};"></div>
        <div class="color-hex-value">${color.hex.value}</div>
      </div>
    
    `
  

    })
  generetedColerElement.innerHTML = colorDiv
}




