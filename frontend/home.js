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
    [0, 0, 0, 0, [0, .3],
        [0, .70], 0, 0
    ],
    [0, 0, 0, 0, [0, .90],
        [0, .10], 0, 0
    ],
    [0, 0, 0, 0, [0, .90],
        [0, .10], 0, 0
    ],
    [0, 0, 0, 0, [0, .90],
        [0, .10], 0, 0
    ],
    [0, 0, 0, 0, [0, .90],
        [0, .10], 0, 0
    ]
]

var temp_tpt = []

var previous_level = 0

function tpt_l0(first = false) {
    $("#tpt_1_div").prop("hidden", true)
    $("#tpt_2_text").html("Identify Event in List")
    $("#tpt_3_text").html("Assess Event Importance")
    $("#tpt_4_text").html("Clear Trouble Ticket")
    $("#tpt_5_text").html("Clear/close Event")
    $("#tpt_6_text").html("Enrich Event")
    setTptValue(0, first)

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
    temp_tpt[previous_level][0] = Number($("#tpt_1").val())
    temp_tpt[previous_level][1] = Number($("#tpt_2").val())
    temp_tpt[previous_level][2] = Number($("#tpt_3").val())
    temp_tpt[previous_level][3] = Number($("#tpt_4").val())
    temp_tpt[previous_level][4][0] = Number($("#tpt_5").val())
    temp_tpt[previous_level][5][0] = Number($("#tpt_6").val())
    total_seconds = temp_tpt[previous_level][0] + temp_tpt[previous_level][1] + temp_tpt[previous_level][2] + temp_tpt[previous_level][3] + temp_tpt[previous_level][4][0] * temp_tpt[previous_level][4][1] + temp_tpt[previous_level][5][0] * temp_tpt[previous_level][5][1];
    $("#tpt_total_seconds").val(total_seconds)

    total_minutes = (total_seconds / 60).toFixed(2);

    $("#tpt_minutes").val(total_minutes);

    temp_tpt[previous_level][6] = total_seconds;

    temp_tpt[previous_level][7] = total_minutes;

}

function setTptValue(level, first = false) {
    if (!first) {
        saveLevelValues()
    }
    $("#tpt_1_error").prop("hidden", true);
    $("#tpt_2_error").prop("hidden", true);
    $("#tpt_3_error").prop("hidden", true);
    $("#tpt_4_error").prop("hidden", true);
    $("#tpt_5_error").prop("hidden", true);
    $("#tpt_6_error").prop("hidden", true);



    previous_level = level

    $("#tpt_1").val(temp_tpt[previous_level][0])
    $("#tpt_2").val(temp_tpt[previous_level][1])
    $("#tpt_3").val(temp_tpt[previous_level][2])
    $("#tpt_4").val(temp_tpt[previous_level][3])
    $("#tpt_5").val(temp_tpt[previous_level][4][0])
    $("#tpt_6").val(temp_tpt[previous_level][5][0])
    $("#tpt_total_seconds").val(temp_tpt[previous_level][6]);
    $("#tpt_minutes").val(temp_tpt[previous_level][7])
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
    temp_tpt = []
    for (i = 0; i < 8; i++) {
        arr = tpt[i];
        temp_tpt.push([])
        temp_tpt[i][0] = arr[0];
        temp_tpt[i][1] = arr[1];
        temp_tpt[i][2] = arr[2];
        temp_tpt[i][3] = arr[3];
        temp_tpt[i][4] = [];
        temp_tpt[i][4][0] = arr[4][0];
        temp_tpt[i][4][1] = arr[4][1];
        temp_tpt[i][5] = [];
        temp_tpt[i][5][0] = arr[5][0];
        temp_tpt[i][5][1] = arr[5][1];
        temp_tpt[i][6] = arr[6];
        temp_tpt[i][7] = arr[7];
    }

    console.log("Open", tpt)

    previous_level = 0
    tpt_l0(true)

})


$("#close_tpt_modal, #cancel_tpt_modal").click(() => {
    temp_tpt = []
    for (i = 0; i < 8; i++) {
        arr = tpt[i];
        temp_tpt.push([])
        temp_tpt[i][0] = arr[0];
        temp_tpt[i][1] = arr[1];
        temp_tpt[i][2] = arr[2];
        temp_tpt[i][3] = arr[3];
        temp_tpt[i][4] = [];
        temp_tpt[i][4][0] = arr[4][0];
        temp_tpt[i][4][1] = arr[4][1];
        temp_tpt[i][5] = [];
        temp_tpt[i][5][0] = arr[5][0];
        temp_tpt[i][5][1] = arr[5][1];
        temp_tpt[i][6] = arr[6];
        temp_tpt[i][7] = arr[7];
    }

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
    tpt = []
    for (i = 0; i < 8; i++) {
        arr = temp_tpt[i];
        tpt.push([])
        tpt[i][0] = arr[0];
        tpt[i][1] = arr[1];
        tpt[i][2] = arr[2];
        tpt[i][3] = arr[3];
        tpt[i][4] = [];
        tpt[i][4][0] = arr[4][0];
        tpt[i][4][1] = arr[4][1];
        tpt[i][5] = [];
        tpt[i][5][0] = arr[5][0];
        tpt[i][5][1] = arr[5][1];
        tpt[i][6] = arr[6];
        tpt[i][7] = arr[7];
    }

    if (!$("#tpt_1_error").is(":hidden") ||
        !$("#tpt_2_error").is(":hidden") ||
        !$("#tpt_3_error").is(":hidden") ||
        !$("#tpt_4_error").is(":hidden") ||
        !$("#tpt_5_error").is(":hidden") ||
        !$("#tpt_6_error").is(":hidden")) { return; }

    $("#tpt_modal").modal("toggle");
    console.log("Saved", tpt)
})



var percent_fastrack = 0
var percent_l1_reduction = 0
var percent_l2_reduction = 0
var percent_l3_reduction = 0
var percent_l4_reduction = 0
var working_days = 0
var working_hours = 0

$("#save_assumption_modal").click(function() {
    percent_fastrack = $("#fastrack_percent").val()
    percent_l1_reduction = $("#l1_percentage_reduction").val()
    percent_l2_reduction = $("#l2_percentage_reduction").val()
    percent_l3_reduction = $("#l3_percentage_reduction").val()
    percent_l4_reduction = $("#l4_percentage_reduction").val()
    working_days = $("#working_days").val()
    working_hours = $("#working_hours").val()
})

$("#cancel_assumption_modal, #close_assumption_modal").click(function() {
    $("#fastrack_percent").val(percent_fastrack)
    $("#l1_percentage_reduction").val(percent_l1_reduction)
    $("#l2_percentage_reduction").val(percent_l2_reduction)
    $("#l3_percentage_reduction").val(percent_l3_reduction)
    $("#l4_percentage_reduction").val(percent_l4_reduction)
    $("#working_days").val(working_days)
    $("#working_hours").val(working_hours)
})