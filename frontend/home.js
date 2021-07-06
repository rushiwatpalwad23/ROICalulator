$(document).ready($("#org_modal").modal('toggle'))

$('#l0_tickets').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l0_tickets_error").prop("hidden", false)
    } else {
        $("#l0_tickets_error").prop("hidden", true)
    }

})

$('#l1_tickets').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l1_tickets_error").prop("hidden", false)
    } else {
        $("#l1_tickets_error").prop("hidden", true)
    }

})

$('#l2_tickets').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l2_tickets_error").prop("hidden", false)
    } else {
        $("#l2_tickets_error").prop("hidden", true)
    }

})

$('#l3_tickets').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l3_tickets_error").prop("hidden", false)
    } else {
        $("#l3_tickets_error").prop("hidden", true)
    }

})

$('#l4_tickets').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l4_tickets_error").prop("hidden", false)
    } else {
        $("#l4_tickets_error").prop("hidden", true)
    }

})


$('#l0_rate').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l0_fte_error").prop("hidden", false)
    } else {
        $("#l0_fte_error").prop("hidden", true)
    }

})

$('#l1_rate').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l1_fte_error").prop("hidden", false)
    } else {
        $("#l1_fte_error").prop("hidden", true)
    }

})

$('#l2_rate').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l2_fte_error").prop("hidden", false)
    } else {
        $("#l2_fte_error").prop("hidden", true)
    }

})

$('#l3_rate').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l3_fte_error").prop("hidden", false)
    } else {
        $("#l3_fte_error").prop("hidden", true)
    }

})

$('#l4_rate').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l4_fte_error").prop("hidden", false)
    } else {
        $("#l4_fte_error").prop("hidden", true)
    }

})

$('#l1_tickets').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#l1_tickets_error").prop("hidden", false)
    } else {
        $("#l1_tickets_error").prop("hidden", true)
    }

})

$('#tpt_1').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_1_error").prop("hidden", false)
    } else {
        $("#tpt_1_error").prop("hidden", true)
        saveLevelValues()
    }

})

$('#tpt_2').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_2_error").prop("hidden", false)
    } else {
        $("#tpt_2_error").prop("hidden", true)
        saveLevelValues()
    }

})

$('#tpt_3').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_3_error").prop("hidden", false)
    } else {
        $("#tpt_3_error").prop("hidden", true)
        saveLevelValues()
    }

})

$('#tpt_4').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_4_error").prop("hidden", false)
    } else {
        $("#tpt_4_error").prop("hidden", true)
        saveLevelValues()
    }

})

$('#tpt_5').bind('input', function() {
    num = $(this).val().trim();
    console.log(num)
    if (isNaN(num) || num < 0) {
        $("#tpt_5_error").prop("hidden", false)
    } else {
        $("#tpt_5_error").prop("hidden", true)
        saveLevelValues()
    }

})

$('#tpt_6').bind('input', function() {
    num = $(this).val().trim();
    if (isNaN(num) || num < 0) {
        $("#tpt_6_error").prop("hidden", false)
    } else {
        $("#tpt_6_error").prop("hidden", true)
        saveLevelValues()
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
    .change(function() {
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

        $.get(url, function(data) {
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
            .fail(function() {
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

$("#save_fte_modal").click(function() {
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

$("#cancel_fte_modal, #fte_modal_close").click(function() {

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


var tpt = [
    [0, 0, 0, 0, [0, 30],
        [0, 70]
    ],
    [0, 0, 0, 0, [0, 90],
        [0, 10]
    ],
    [0, 0, 0, 0, [0, 90],
        [0, 10]
    ],
    [0, 0, 0, 0, [0, 90],
        [0, 10]
    ],
    [0, 0, 0, 0, [0, 90],
        [0, 10]
    ]
]

var temp_tpt = [...tpt]

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

function saveLevelValues() {
    temp_tpt[previous_level][0] = $("#tpt_1").val()
    temp_tpt[previous_level][1] = $("#tpt_2").val()
    temp_tpt[previous_level][2] = $("#tpt_3").val()
    temp_tpt[previous_level][3] = $("#tpt_4").val()
    temp_tpt[previous_level][4][0] = $("#tpt_5").val()
    temp_tpt[previous_level][5][0] = $("#tpt_6").val()
    console.log(tpt)
}

function setTptValue(level) {

    $("#tpt_1_error").prop("hidden", true);
    $("#tpt_2_error").prop("hidden", true);
    $("#tpt_3_error").prop("hidden", true);
    $("#tpt_4_error").prop("hidden", true);
    $("#tpt_5_error").prop("hidden", true);
    $("#tpt_6_error").prop("hidden", true);

    saveLevelValues()
        // console.log("Previous", previous_level)
        // console.log(temp_tpt)
    previous_level = level
        // console.log("Next", previous_level)
        // console.log(temp_tpt)

    $("#tpt_1").val(temp_tpt[previous_level][0])
    $("#tpt_2").val(temp_tpt[previous_level][1])
    $("#tpt_3").val(temp_tpt[previous_level][2])
    $("#tpt_4").val(temp_tpt[previous_level][3])
    $("#tpt_5").val(temp_tpt[previous_level][4][0])
    $("#tpt_6").val(temp_tpt[previous_level][5][0])
}

$("#level_list").change(() => {
    level = $("#level_list option:selected").index()
    if (level == 0)
        tpt_l0()
    else if (level == 1)
        tpt_l1()
    else if (level == 2)
        tpt_l2()
    else if (level == 3)
        tpt_l3()
    else
        tpt_l4()
})


$("#open_tpt_modal").click(() => {

    $("#level_list option:eq(0)").prop("selected", "selected")
    previous_level = 0
    tpt_l0()

})


$("#close_tpt_modal, #cancel_tpt_modal").click(() => {
    temp_tpt = [...tpt]

    previous_level = 0
    $("#tpt_1_error").prop("hidden", true);
    $("#tpt_2_error").prop("hidden", true);
    $("#tpt_3_error").prop("hidden", true);
    $("#tpt_4_error").prop("hidden", true);
    $("#tpt_5_error").prop("hidden", true);
    $("#tpt_6_error").prop("hidden", true);
    console.log("TPT", tpt)
    console.log("Temp", temp_tpt)

})

$("#save_tpt_modal").click(() => {
    tpt = [...temp_tpt]

    if (!$("#tpt_1_error").is(":hidden") ||
        !$("#tpt_2_error").is(":hidden") ||
        !$("#tpt_3_error").is(":hidden") ||
        !$("#tpt_4_error").is(":hidden") ||
        !$("#tpt_5_error").is(":hidden") ||
        !$("#tpt_6_error").is(":hidden")) { return; }
    $("#tpt_modal").modal("toggle");
})



var percent_fastrack = 0.500
var percent_l1_reduction = 60
var percent_l2_reduction = 20
var percent_l3_reduction = 5
var percent_l4_reduction = 5
var working_days = 240
var working_hours = 8.5

$("#save_assumption_modal").click(function() {
    percent_fastrack = $("#fastrack_percent").val()
    percent_l1_reduction = $("#l1_percentage_reduction").val()
    percent_l2_reduction = $("#l2_percentage_reduction").val()
    percent_l3_reduction = $("#l3_percentage_reduction").val()
    percent_l4_reduction = $("#l4_percentage_reduction").val()
    working_days = $("#working_days").val()
    working_hours = $("#working_hours").val()
})

$("#cancel_assumption_modal, #assumption_modal_close").click(function() {
    $("#fastrack_percent").val(percent_fastrack)
    $("#l1_percentage_reduction").val(percent_l1_reduction)
    $("#l2_percentage_reduction").val(percent_l2_reduction)
    $("#l3_percentage_reduction").val(percent_l3_reduction)
    $("#l4_percentage_reduction").val(percent_l4_reduction)
    $("#working_days").val(working_days)
    $("#working_hours").val(working_hours)
})


$("#save_org_modal").click(function(){
    var default_currency = $("#default_currency").val()
    var first_level = $("#first_level").val()
    var second_level = $("#second_level").val()
    var third_level = $("#third_level").val()
    var fourth_level = $("#fourth_level").val()
    var fifth_level = $("#fifth_level").val()
    
    $("#L0_home").html(first_level);
    $("#L1_home").html(second_level);
    $("#L2_home").html(third_level);
    $("#L3_home").html(fourth_level);
    $("#L4_home").html(fifth_level);
    $("#L0_fte_label").html(first_level);
    $("#L1_fte_label").html(second_level);
    $("#L2_fte_label").html(third_level);
    $("#L3_fte_label").html(fourth_level);
    $("#L4_fte_label").html(fifth_level);
    
    if(default_currency === "USD"){
        $('#USD').click();
    }
    else if(default_currency === "INR"){
        $('#INR').click();   
    }
    else if(default_currency === "EUR"){
        $('#EUR').click();   
    }
    else{
        $('#GBP').click();   
    }


})
