function validate(){
   var data = [
      {x: "White", value: 223553265},
      {x: "Black or African American", value: 38929319}
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Population by Race for the United States: 2010 Census");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  chart.draw();

  var marks_input = document.getElementById("marks").value;
  console.log(marks_input);
  var check = Math.ceil(marks_input + 100);
  console.log(check);
  var marks = parseInt(marks_input);
  console.log(typeof(marks));
  console.log(marks);
  if(marks > 50){
    document.getElementById("result").value = "Pass";
  }
  else{
    document.getElementById("result").value = "Fail";
  }

}

function myFunction() {
        // Get the checkbox
        var checkBox = document.getElementById("myCheck");
        // Get the output text
        var third_party_ticket = document.getElementById("hidden");

        
        if (checkBox.checked == true){
          third_party_ticket.style.display = "block";
          var tickets = document.getElementById("third_party_ticket");
          alert(tickets);
        } else {
          third_party_ticket.style.display = "none";
        }

}

function onlyNumberKey(evt) {
         
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}

 