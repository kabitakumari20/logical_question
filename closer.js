function a(){
    var v=20
    function b(){
        var c=30
        console.log(v+c)
    }
    return b
}
const add=a()
add()
