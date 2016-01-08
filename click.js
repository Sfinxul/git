$(button).onclick(function(){
alert.log("You clicked!");
});


<script>
function myFunction() {
    document.getElementById("button").onclick = alert.log("You clicked!");
}
</script>
