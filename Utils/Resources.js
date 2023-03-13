function BuildCSS(Map){
    for (let index in Map){
        var Item = Map[index]
        var Element = document.createElement("link")
        Element.href = Item
        Element.rel = "stylesheet"
        document.head.appendChild(Element)
    }
}
function BuildJS(Map){
    for (let index in Map){
        var Item = Map[index]
        var Element = document.createElement("script")
        Element.src = Item
        document.head.appendChild(Element)
    }
}