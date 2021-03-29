data = {}

vm = new Vue({
    data: data,
    el: "#abc"
})

vm.$data === data
vm.$el === document.getElementById("abc")

vm.$watch('abc', function(newV, oldV){
    console.log(`change from ${oldV} to ${newV}`)
})