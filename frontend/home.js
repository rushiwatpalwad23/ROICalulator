$('#l0_tickets').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l0_tickets_error").prop("hidden", false)
    }
    else {
        $("#l0_tickets_error").prop("hidden", true)
    }

})

$('#l1_tickets').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l1_tickets_error").prop("hidden", false)
    }
    else {
        $("#l1_tickets_error").prop("hidden", true)
    }

})

$('#l2_tickets').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l2_tickets_error").prop("hidden", false)
    }
    else {
        $("#l2_tickets_error").prop("hidden", true)
    }

})

$('#l3_tickets').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l3_tickets_error").prop("hidden", false)
    }
    else {
        $("#l3_tickets_error").prop("hidden", true)
    }

})

$('#l4_tickets').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l4_tickets_error").prop("hidden", false)
    }
    else {
        $("#l4_tickets_error").prop("hidden", true)
    }

})


$('#l0_rate').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l0_fte_error").prop("hidden", false)
    }
    else {
        $("#l0_fte_error").prop("hidden", true)
    }

})

$('#l1_rate').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l1_fte_error").prop("hidden", false)
    }
    else {
        $("#l1_fte_error").prop("hidden", true)
    }

})

$('#l2_rate').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l2_fte_error").prop("hidden", false)
    }
    else {
        $("#l2_fte_error").prop("hidden", true)
    }

})

$('#l3_rate').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l3_fte_error").prop("hidden", false)
    }
    else {
        $("#l3_fte_error").prop("hidden", true)
    }

})

$('#l4_rate').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l4_fte_error").prop("hidden", false)
    }
    else {
        $("#l4_fte_error").prop("hidden", true)
    }

})

$('#l1_tickets').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l1_tickets_error").prop("hidden", false)
    }
    else {
        $("#l1_tickets_error").prop("hidden", true)
    }

})

$('#tpt_1').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_1_error").prop("hidden", false)
    }
    else {
        $("#tpt_1_error").prop("hidden", true)
    }

})

$('#tpt_2').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_2_error").prop("hidden", false)
    }
    else {
        $("#tpt_2_error").prop("hidden", true)
    }

})

$('#tpt_3').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_3_error").prop("hidden", false)
    }
    else {
        $("#tpt_3_error").prop("hidden", true)
    }

})

$('#tpt_4').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_4_error").prop("hidden", false)
    }
    else {
        $("#tpt_4_error").prop("hidden", true)
    }

})

$('#tpt_5').bind('input', function () {
    num = $(this).val().trim();
    console.log(num)
    if (isNaN(num) || num < 0) {
        $("#tpt_5_error").prop("hidden", false)
    }
    else {
        $("#tpt_5_error").prop("hidden", true)
    }

})

$('#tpt_6').bind('input', function () {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_6_error").prop("hidden", false)
    }
    else {
        $("#tpt_6_error").prop("hidden", true)
    }

})




var current = "USD"
var previous = ''
var currency_api = "https://free.currconv.com/api/v7/convert?"
const compact = "ultra"
const apiKey = "797d1d4c606d58ad29d3"
previous_currency = 'USD'


//FTE Rate card functions

$("input:radio[name=opt_currency]")
    .change(function () {
        previous = current
        current = $(this).val()

        if (current == previous) {
            return;
        }

        url = currency_api + new URLSearchParams({
            q: previous + "_" + current,
            compact: compact,
            apiKey: apiKey
        })

        $.get(url, function (data) {
            conversionValue = data[previous + "_" + current]
            l0_rate = $("#l0_rate").val()
            $("#l0_rate").val(Math.round(l0_rate * conversionValue))
            l1_rate = $("#l1_rate").val()
            $("#l1_rate").val(Math.round(l1_rate * conversionValue))
            l2_rate = $("#l2_rate").val()
            $("#l2_rate").val(Math.round(l2_rate * conversionValue))
            l3_rate = $("#l3_rate").val()
            $("#l3_rate").val(Math.round(l3_rate * conversionValue))
            l4_rate = $("#l4_rate").val()
            $("#l4_rate").val(Math.round(l4_rate * conversionValue))

        })
            .fail(function () {
                alert("Something went wrong!!!")
                $("#" + previous).prop("checked", true)
            })


        console.log(url)

    })

var l0_new_fte_rate = 9600;
var l1_new_fte_rate = 10000;
var l2_new_fte_rate = 15000;
var l3_new_fte_rate = 25000;
var l4_new_fte_rate = 35000;

$("#save_fte_modal").click(function () {
    if (!$("#l0_fte_error").is(":hidden") ||
        !$("#l1_fte_error").is(":hidden") ||
        !$("#l2_fte_error").is(":hidden") ||
        !$("#l3_fte_error").is(":hidden") ||
        !$("#l4_fte_error").is(":hidden")) { return; }

    l0_new_fte_rate = $("#l0_rate").val();
    l1_new_fte_rate = $("#l1_rate").val();
    l2_new_fte_rate = $("#l2_rate").val();
    l3_new_fte_rate = $("#l3_rate").val();
    l4_new_fte_rate = $("#l4_rate").val();
    previous_currency = current;

    $("#fte_modal").modal('toggle');
})

$("#cancel_fte_modal, #fte_modal_close").click(function () {

    $("#l0_rate").val(l0_new_fte_rate)
    $("#l1_rate").val(l1_new_fte_rate)
    $("#l2_rate").val(l2_new_fte_rate)
    $("#l3_rate").val(l3_new_fte_rate)
    $("#l4_rate").val(l4_new_fte_rate)
    $("#" + previous_currency).prop("checked", true)
    current = previous_currency
    $("#l0_fte_error").prop("hidden", true)
    $("#l1_fte_error").prop("hidden", true)
    $("#l2_fte_error").prop("hidden", true)
    $("#l3_fte_error").prop("hidden", true)
    $("#l4_fte_error").prop("hidden", true)

})


//Time per ticket functions
// var tpt_l0 = [0, 125, 80, 60, [20, .3], [65, 0.7]]
// var tpt_l1 = [160, 240, 50, 180, [120, 0.9], [60, 0.1]]
// var tpt_l2 = [160, 120, 300, 240, [180, 0.9], [240, 0.1]]
// var tpt_l3 = [160, 120, 300, 240, [180, 0.9], [240, 0.1]]
// var tpt_l4 = [160, 120, 300, 240, [180, 0.9], [240, 0.10]]

var tpt = [[0, 0, 0, 0, [0, 30], [0, 70]],
[0, 0, 0, 0, [0, 90], [0, 10]],
[0, 0, 0, 0, [0, 90], [0, 10]],
[0, 0, 0, 0, [0, 90], [0, 10]],
[0, 0, 0, 0, [0, 90], [0, 10]]
]

var temp_tpt = tpt

var previous_level = 0

function tpt_l0() {
    $("#tpt_1_div").prop("hidden", true)
    $("#tpt_2_text").html("Identify Event in List")
    $("#tpt_3_text").html("Assess Event Importance")
    $("#tpt_4_text").html("Clear Trouble Ticket")
    $("#tpt_5_text").html("Clear/close Event")
    $("#tpt_6_text").html("Enrich Event")
    setTptValue(0)

}

function tpt_l1() {
    $("#tpt_1_div").prop("hidden", false)
    $("#tpt_1_text").html("Accept and Comprehend")
    $("#tpt_2_text").html("Identify related events")
    $("#tpt_3_text").html("Assess impact/importance/priority")
    $("#tpt_4_text").html("Gather diagnostic information")
    $("#tpt_5_text").html("Resolve, Document and Close Ticket")
    $("#tpt_6_text").html("Escalate Ticket ")
    setTptValue(1)

}

function tpt_l2() {
    $("#tpt_1_div").prop("hidden", false)
    $("#tpt_1_text").html("Escalation info handover disussion")
    $("#tpt_2_text").html("Identify/review related events")
    $("#tpt_3_text").html("Detailed investigation")
    $("#tpt_4_text").html("Carry out resolution activity")
    $("#tpt_5_text").html("Resolve, Document and Close Ticket")
    $("#tpt_6_text").html("Incident escalation and discussion")
    setTptValue(2)

}

function tpt_l3() {

    $("#tpt_1_div").prop("hidden", false)
    $("#tpt_1_text").html("Escalation info handover discussion")
    $("#tpt_2_text").html("Identify/review related events")
    $("#tpt_3_text").html("Detailed investigation")
    $("#tpt_4_text").html("Carry out resolution activity")
    $("#tpt_5_text").html("Resolve, Document and Close Ticket")
    $("#tpt_6_text").html("Incident escalation and discussion")
    setTptValue(3)

}

function tpt_l4() {

    $("#tpt_1_div").prop("hidden", false)
    $("#tpt_1_text").html("Escalation info handover discussion")
    $("#tpt_2_text").html("Identify/review related events")
    $("#tpt_3_text").html("Detailed investigation")
    $("#tpt_4_text").html("Carry out resolution activity")
    $("#tpt_5_text").html("Resolve, Document and Close Ticket")
    $("#tpt_6_text").html("Incident escalation and discussion")
    setTptValue(4)

}

function setTptValue(level) {
    console.log(previous_level)
    temp_tpt[previous_level][0] = $("#tpt_1").val()
    temp_tpt[previous_level][1] = $("#tpt_2").val()
    temp_tpt[previous_level][2] = $("#tpt_3").val()
    temp_tpt[previous_level][3] = $("#tpt_4").val()
    temp_tpt[previous_level][4] = $("#tpt_5").val()
    temp_tpt[previous_level][5] = $("#tpt_6").val() 
    console.log(temp_tpt[previous_level])
    previous_level = level
    console.log(temp_tpt[previous_level])

    $("#tpt_1").val(temp_tpt[previous_level][0])
    $("#tpt_2").val(temp_tpt[previous_level][1])
    $("#tpt_3").val(temp_tpt[previous_level][2])
    $("#tpt_4").val(temp_tpt[previous_level][3])
    $("#tpt_5").val(temp_tpt[previous_level][4])
    $("#tpt_6").val(temp_tpt[previous_level][5])
}

$("#level_list").change(() => {
    level = $("#level_list option:selected").index()
    previous_level = level
    if(level==0)
    tpt_l0()
    else if(level==1)
    tpt_l1()
    else if(level==2)
    tpt_l2()
    else if(level==3)
    tpt_l3()
    else
    tpt_l4()
})


$("#open_tpt_modal").click(()=>{

    $("#level_list option:eq(0)").prop("selected", "selected")
    previous_level = 0
    tpt_l0()

})


$("#close_tpt_modal, #cancel_tpt_modal").click(() => {
    temp_tpt = tpt

})

$("#save_tpt_modal").click(() => {
    tpt = temp_tpt
})



var percent_fastrack = 0.500
var percent_l1_reduction = 60
var percent_l2_reduction = 20
var percent_l3_reduction = 5
var percent_l4_reduction = 5
var working_days = 240
var working_hours = 8.5

$("#save_assumption_modal").click(function () {
    percent_fastrack = $("#fastrack_percent").val()
    percent_l1_reduction = $("#l1_percentage_reduction").val()
    percent_l2_reduction = $("#l2_percentage_reduction").val()
    percent_l3_reduction = $("#l3_percentage_reduction").val()
    percent_l4_reduction = $("#l4_percentage_reduction").val()
    working_days = $("#working_days").val()
    working_hours = $("#working_hours").val()
})

$("#cancel_assumption_modal, #assumption_modal_close").click(function () {
    $("#fastrack_percent").val(percent_fastrack)
    $("#l1_percentage_reduction").val(percent_l1_reduction)
    $("#l2_percentage_reduction").val(percent_l2_reduction)
    $("#l3_percentage_reduction").val(percent_l3_reduction)
    $("#l4_percentage_reduction").val(percent_l4_reduction)
    $("#working_days").val(working_days)
    $("#working_hours").val(working_hours)
})




