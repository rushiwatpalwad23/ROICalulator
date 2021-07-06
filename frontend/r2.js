function calculation(){
	var l0_minutes_per_ticket = 5;
	var l1_minutes_per_ticket = 13;
	var l2_minutes_per_ticket = 17;
	var l3_minutes_per_ticket = 17;
	var l4_minutes_per_ticket = 17;

	
	var hours_per_day = document.getElementById("hours_per_day").value;
	var days_per_year = document.getElementById("days_per_year").value;
	var minutes_per_day = hours_per_day * 60;
	
	var percent_fast_track = document.getElementById("fastrack_percent").value;
	var percent_reduction_l1_tickets = document.getElementById("l1_percentage_reduction").value;
	var percent_reduction_l2_tickets = document.getElementById("l2_percentage_reduction").value;
	var percent_reduction_l3_tickets = document.getElementById("l3_percentage_reduction").value;
	var percent_reduction_l4_tickets = document.getElementById("l4_percentage_reduction").value;


	var l0_fte_rate = document.getElementById("l0_rate").value;
	var l1_fte_rate = document.getElementById("l1_rate").value;
	var l2_fte_rate = document.getElementById("l2_rate").value;
	var l3_fte_rate = document.getElementById("l3_rate").value;
	var l4_fte_rate = document.getElementById("l4_rate").value;

		
	var l0_ticket_input = document.getElementById("l0_ticket").value;
	var l1_ticket_input = document.getElementById("l1_ticket").value;
	var l2_ticket_input = document.getElementById("l2_ticket").value;
	var l3_ticket_input = document.getElementById("l3_ticket").value;
	var l4_ticket_input = document.getElementById("l4_ticket").value;
		
	var l0_ticket = l0_ticket_input * 12;
	var l1_ticket = l1_ticket_input * 12;
	var l2_ticket = l2_ticket_input * 12;
	var l3_ticket = l3_ticket_input * 12;
	var l4_ticket = l4_ticket_input * 12;
		
	var tickets_resolved_prior_knowledge = Math.floor(l1_ticket * (1 - (percent_reduction_l1_tickets/100) ) * (percent_fast_track/100));

	var years_input = document.getElementById("years").value;
	var months_input = document.getElementById("months").value;

	var years = parseInt(years_input);
	var months = parseInt(months_input);

	var installment_time = 3;

	var installation_cost = 150000;

	var l1_aiops_ticket = Math.ceil( (l1_ticket * (1 - (percent_reduction_l1_tickets/100) ) ) ) - tickets_resolved_prior_knowledge;
	var l1_aiops_minutes_per_ticket = 8;
	var l2_aiops_ticket = Math.ceil(l2_ticket * (1 - percent_reduction_l2_tickets/100));
	var l2_aiops_minutes_per_ticket = 15;
	var l3_aiops_ticket = Math.ceil(l3_ticket * (1 - percent_reduction_l3_tickets/100));
	var l3_aiops_minutes_per_ticket = 15;
	var l4_aiops_ticket = Math.ceil(l4_ticket * (1 - percent_reduction_l4_tickets/100));
	var l4_aiops_minutes_per_ticket = 15;

	var total_l0_manual_days = Math.round((l0_ticket * l0_minutes_per_ticket) / minutes_per_day);
	var total_l1_manual_days = Math.round((l1_ticket * l1_minutes_per_ticket) / minutes_per_day);
	var total_l2_manual_days = Math.round((l2_ticket * l2_minutes_per_ticket) / minutes_per_day);
	var total_l3_manual_days = Math.round((l3_ticket * l3_minutes_per_ticket) / minutes_per_day);
	var total_l4_manual_days = Math.round((l4_ticket * l4_minutes_per_ticket) / minutes_per_day);
	console.log(total_l1_manual_days);

	var total_l1_aiops_days = Math.floor((l1_aiops_ticket * l1_aiops_minutes_per_ticket) / minutes_per_day);
	var total_l2_aiops_days = Math.floor((l2_aiops_ticket * l2_aiops_minutes_per_ticket) / minutes_per_day);
	var total_l3_aiops_days = Math.floor((l3_aiops_ticket * l3_aiops_minutes_per_ticket) / minutes_per_day);
	var total_l4_aiops_days = Math.floor((l4_aiops_ticket * l4_aiops_minutes_per_ticket) / minutes_per_day);
	console.log(total_l1_aiops_days);


	var l0_fte = Math.floor(total_l0_manual_days / days_per_year);
	var l1_fte = Math.floor(total_l1_manual_days / days_per_year);
	var l2_fte = Math.floor(total_l2_manual_days / days_per_year);
	var l3_fte = Math.floor(total_l3_manual_days / days_per_year);
	var l4_fte = Math.floor(total_l4_manual_days / days_per_year);
	console.log(l0_fte);
	console.log(l1_fte);		
	var l1_aiops_fte = Math.floor(total_l1_aiops_days / days_per_year);
	var l2_aiops_fte = Math.floor(total_l2_aiops_days / days_per_year);
	var l3_aiops_fte = Math.floor(total_l3_aiops_days / days_per_year);
	var l4_aiops_fte = Math.floor(total_l4_aiops_days / days_per_year);
	console.log(l1_aiops_fte);
	console.log("find the error");
	var l0_fte_saved = l0_fte;
	var l1_fte_saved = l1_fte - l1_aiops_fte;
	var l2_fte_saved = l2_fte - l2_aiops_fte;
	var l3_fte_saved = l3_fte - l3_aiops_fte;
	var l4_fte_saved = l4_fte - l4_aiops_fte;
	console.log(l0_fte_saved);
	console.log(l1_fte_saved);
	console.log(l2_fte_saved);
	console.log(l3_fte_saved);
	console.log(l4_fte_saved);
	
	var total_days = (years * 240) + (months * 20) - (installment_time * 20);
	console.log("total days "+ total_days);
	var l0_savings = Math.floor((l0_fte_saved * total_days * l0_fte_rate) / 240);
	console.log("l0 savings "+l0_savings);
	var l1_savings = Math.floor((l1_fte_saved * total_days * l1_fte_rate) / 240);
	console.log("l1 savings "+l1_savings);
	var l2_savings = Math.floor((l2_fte_saved * total_days * l2_fte_rate) / 240);
	console.log("l2 savings "+l2_savings);
	var l3_savings = Math.floor((l3_fte_saved * total_days * l3_fte_rate) / 240);
	var l4_savings = Math.floor((l4_fte_saved * total_days * l4_fte_rate) / 240);

	var total_saving = l0_savings + l1_savings + l2_savings + l3_savings + l4_savings;
	console.log("total_saving "+ total_saving);
	console.log(typeof(total_saving));
	var profit = total_saving - installation_cost;

	document.getElementById("savings").value = total_saving;
	document.getElementById("profit").value = profit;
	console.log(total_saving);
	console.log(profit);
	console.log("End");
			
}


function onlyNumberKey(evt) {
         
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}

function fte_save(){
	var l0_new_fte_rate = document.getElementById("l0_rate").value;
	document.getElementById("l0_rate").value = l0_new_fte_rate;
	var l1_new_fte_rate = document.getElementById("l1_rate").value;
	document.getElementById("l1_rate").value = l1_new_fte_rate;
	var l2_new_fte_rate = document.getElementById("l2_rate").value;
	document.getElementById("l2_rate").value = l2_new_fte_rate;
	var l3_new_fte_rate = document.getElementById("l3_rate").value;
	document.getElementById("l3_rate").value = l3_new_fte_rate;
	var l4_new_fte_rate = document.getElementById("l4_rate").value;
	document.getElementById("l4_rate").value = l4_new_fte_rate;	
}		

function assumptions_save(){
	var new_percent_fast_track = document.getElementById("fastrack_percent").value;
	document.getElementById("fastrack_percent").value = new_percent_fast_track; 
}


