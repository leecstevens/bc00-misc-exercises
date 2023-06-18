let time_format = "MMM D, YYYY hh:mm:ss a"
let submit_button = document.getElementById("add_button")


function set_time() {
    let current_time = setInterval(function() {
            $("#time-display").text(dayjs().format(time_format))
     }, 1000 )
}

$( function() {
    $("#project-date-input" ).datepicker();
  } );

submit_button.addEventListener("click", () =>{
  const p_name = $("#project-name-input").val()
  const p_input = $("#project-type-input").val()
  
})
  
set_time()
