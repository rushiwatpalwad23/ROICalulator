var current = "USD"
var previous = ''
var currency_api = "https://free.currconv.com/api/v7/convert?"
const compact="ultra"
const apiKey="797d1d4c606d58ad29d3"
previous_currency = 'USD'


$("input:radio[name=opt_currency]")
.change(function(){
    previous = current
    current = $(this).val()

    if (current == previous){
        return ;
    }

    url = currency_api + new URLSearchParams({
        q : previous+"_"+current,
        compact : compact,
        apiKey : apiKey
    })

    $.get(url, function(data){
        conversionValue = data[previous+"_"+current]
        l0_rate = $("#l0_rate").val()
        $("#l0_rate").val(Math.round(l0_rate*conversionValue))
        l1_rate = $("#l1_rate").val()
        $("#l1_rate").val(Math.round(l1_rate*conversionValue))
        l2_rate = $("#l2_rate").val()
        $("#l2_rate").val(Math.round(l2_rate*conversionValue))
        l3_rate = $("#l3_rate").val()
        $("#l3_rate").val(Math.round(l3_rate*conversionValue))
        l4_rate = $("#l4_rate").val()
        $("#l4_rate").val(Math.round(l4_rate*conversionValue))

    })
    .fail(function(){
        alert("Something went wrong!!!")
        $("#"+previous).prop("checked",true)
    })


    console.log(url)

})

var l0_new_fte_rate = 9600;
var l1_new_fte_rate = 10000;
var l2_new_fte_rate = 15000;
var l3_new_fte_rate = 25000;
var l4_new_fte_rate = 35000;

$("#save_fte_modal").click(function (){
	l0_new_fte_rate = $("#l0_rate").val();
    l1_new_fte_rate = $("#l1_rate").val();
	l2_new_fte_rate = $("#l2_rate").val();
	l3_new_fte_rate = $("#l3_rate").val();
	l4_new_fte_rate = $("#l4_rate").val();
    previous_currency = current;	
}   )

$("#cancel_fte_modal, #fte_modal_close").click(function(){

    $("#l0_rate").val(l0_new_fte_rate)
    $("#l1_rate").val(l1_new_fte_rate)
    $("#l2_rate").val(l2_new_fte_rate)
    $("#l3_rate").val(l3_new_fte_rate)
    $("#l4_rate").val(l4_new_fte_rate)
    $("#"+previous_currency).prop("checked",true)
    current = previous_currency
        
    })

var percent_fastrack = 0.500
var percent_l1_reduction = 60
var percent_l2_reduction = 20
var percent_l3_reduction = 5
var percent_l4_reduction = 5
var working_days = 240
var working_hours = 8.5

$("#save_assumption_modal").click(function(){
    percent_fastrack = $("#fastrack_percent").val()
    percent_l1_reduction = $("#l1_percentage_reduction").val()
    percent_l2_reduction = $("#l2_percentage_reduction").val()
    percent_l3_reduction = $("#l3_percentage_reduction").val()
    percent_l4_reduction = $("#l4_percentage_reduction").val()
    working_days = $("#working_days").val()
    working_hours = $("#working_hours").val()
})

$("#cancel_assumption_modal, #assumption_modal_close").click(function(){
    $("#fastrack_percent").val(percent_fastrack)
    $("#l1_percentage_reduction").val(percent_l1_reduction)
    $("#l2_percentage_reduction").val(percent_l2_reduction)
    $("#l3_percentage_reduction").val(percent_l3_reduction)
    $("#l4_percentage_reduction").val(percent_l4_reduction)
    $("#working_days").val(working_days)
    $("#working_hours").val(working_hours)
}) 
    